// Copyright 2015-2018 Parity Technologies (UK) Ltd.
// This file is part of Parity.
//
// SPDX-License-Identifier: BSD-3-Clause

import { setCli } from './utils/cli';
import { setLogger } from './utils/logger';

export * from './getParityPath';
export * from './fetchParity';
export * from './isParityRunning';
export * from './runParity';
export * from './signerNewToken';

// Set default options for @parity/electron
export default opts => {
  if (opts.cli) {
    setCli(opts.cli);
  }

  if (opts.logger) {
    setLogger(opts.logger);
  }
};
