// Copyright 2015-2018 Parity Technologies (UK) Ltd.
// This file is part of Parity.
//
// SPDX-License-Identifier: BSD-3-Clause

/**
 * Given a command and its args, returns a nice string to be logged. The
 * arguments to this function are the same as the ones you would pass to spawn.
 *
 * @param {String} command - The command to be run.
 * @param {String} args - The args of the above command.
 */
const logCommand = (command, args) =>
  `Running "${command.replace(' ', '\\ ')} ${args.join(' ')}".`;

export default logCommand;
