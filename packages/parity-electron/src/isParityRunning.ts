// Copyright 2015-2018 Parity Technologies (UK) Ltd.
// This file is part of Parity.
//
// SPDX-License-Identifier: BSD-3-Clause

import axios from 'axios';
import * as retry from 'async-retry';

import logger from './utils/logger';

/**
 * Detect if another instance of parity is already running or not. To achieve
 * that, we just ping on the common hosts, see {@link hostsToPing} array.
 */
export const isParityRunning = async ({
  wsInterface = '127.0.0.1',
  wsPort = '8546'
}: {
    wsInterface: string;
    wsPort: string;
  }) => {
  /**
   * Try to ping these hosts to test if Parity is running.
   */
  const hostsToPing = [
    `http://${wsInterface}:${wsPort}`
  ];

  try {
    // Retry to ping as many times as there are hosts in `hostsToPing`
    await retry(
      async (_, attempt: number) => {
        const host = hostsToPing[attempt - 1]; // Attempt starts with 1
        await axios.get(host);
        logger()('@parity/electron:main')(
          `Another instance of parity is already running on ${host}, skip running local instance.`
        );
      },
      { retries: hostsToPing.length }
    );

    return true;
  } catch (e) {
    return false;
  }
};
