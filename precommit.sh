#!/bin/bash
# pre-commit - Bizboard Development Workflow
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
node $DIR/scripts/precommit.js
