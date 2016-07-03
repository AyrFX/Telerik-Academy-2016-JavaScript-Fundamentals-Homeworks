function solve(params) {
    var rows = parseInt(params[0]),
        cols = parseInt(params[1]),
        board = [],
        moves = [],
        tests = parseInt(params[rows + 2]),
        i, j, k;

    for (i = 2; i < rows + 2; i += 1) {
        board.push(params[i].split(''));
    }
    for (i = 0; i < tests; i += 1) {
        moves.push(params[rows + 3 + i]);
    }

    function GetMoveIndexes(move) {
        var row = +move[1],
            col = move.charCodeAt(0) - 97;
        return {
            row: row,
            col: col
        };
    }

    function IsStrightMove(move) {
        var startPosition = move.split(' ')[0],
            endPosition = move.split(' ')[1];

        if (GetMoveIndexes(startPosition).row === GetMoveIndexes(endPosition).row ||
            GetMoveIndexes(startPosition).col === GetMoveIndexes(endPosition).col) {
            return true;
        } else {
            return false;
        }
    }

    function IsDiagonalMove(move) {
        var startPosition = move.split(' ')[0],
            endPosition = move.split(' ')[1];

        if (Math.abs(GetMoveIndexes(startPosition).row - GetMoveIndexes(endPosition).row) ===
            Math.abs(GetMoveIndexes(startPosition).col - GetMoveIndexes(endPosition).col)) {
            return true;
        } else {
            return false;
        }
    }

    function ToRealIndexes(move) {
        var newMove = {};
        newMove.row = rows - move.row;
        newMove.col = move.col;
        return newMove;
    }

    for (i = 0; i < moves.length; i += 1) {
        console.log('test ' + i);
        var startMove = moves[i].split(' ')[0],
            endMove = moves[i].split(' ')[1],
            startIndexes = GetMoveIndexes(startMove),
            endIndexes = GetMoveIndexes(endMove),
            currentPiece;

        currentPiece = board[ToRealIndexes(startIndexes).row][ToRealIndexes(startIndexes).col];

        //Check if the move is valid
        if (!IsStrightMove(moves[i]) && !IsDiagonalMove(moves[i])) {
            console.log(currentPiece);
            console.log('no; not valid move');
            continue;
        }

        switch (currentPiece) {
        case 'R':
            if (!IsStrightMove(moves[i])) {
                console.log(currentPiece);
                console.log('no; not stright move');
                continue;
            }
            break;
        case 'B':
            if (!IsDiagonalMove(moves[i])) {
                console.log(currentPiece);
                console.log('no; not diagonal move');
                continue;
            }
            break;
        case 'Q':
            if (!IsStrightMove(moves[i]) && !IsDiagonalMove(moves[i])) {
                console.log(currentPiece);
                console.log('no; not stright or diagonal move');
                continue;
            }
            break;
        default: //if the square is empty
            console.log(currentPiece);
            console.log('no; no figure on the start position');
            continue;
        }

        //Checks for the concrete moves if they are valid
        if ((currentPiece === 'R' || currentPiece === 'Q') && IsStrightMove(moves[i])) {
            var needToContinue = false;
            if (startIndexes.row === endIndexes.row) {
                var currentRow = startIndexes.row;

                needToContinue = false;
                for (j = Math.min(startIndexes.col, endIndexes.col) + 1; j <= Math.max(startIndexes.col, endIndexes.col); j +=
                    1) {
                    if (board[currentRow][j] !== '-') {
                        console.log(currentPiece);
                        console.log('no; there is figure on the way');
                        needToContinue = true;
                        break;
                    }
                }
                if (needToContinue) {
                    continue;
                } else {
                    console.log(currentPiece);
                    console.log('yes');
                }
            } else if (startIndexes.col === endIndexes.col) {
                var currentCol = startIndexes.col;

                needToContinue = false;
                for (j = Math.min(startIndexes.row, endIndexes.row) + 1; j <= Math.max(startIndexes.row, endIndexes.row); j +=
                    1) {
                    if (board[j][currentCol] !== '-') {
                        console.log(currentPiece);
                        console.log('no; there is figure on the way');
                        needToContinue = true;
                        break;
                    }
                }
                if (needToContinue) {
                    continue;
                } else {
                    console.log(currentPiece);
                    console.log('yes');
                }
            }
        }

        if ((currentPiece === 'B' || currentPiece === 'Q') && IsDiagonalMove(moves[i])) {
            var realStartIndexes = ToRealIndexes(GetMoveIndexes(moves[i].split(' ')[0])),
                realEndIndexes = ToRealIndexes(GetMoveIndexes(moves[i].split(' ')[1]));

            needToContinue = false;
            if (realStartIndexes.row > realEndIndexes.row) {
                if (realStartIndexes.col > realEndIndexes.col) {
                    //startRow > endRow and startCol > endCol
                    for (j = realStartIndexes.row - 1, k = realStartIndexes.col - 1; j >= realEndIndexes.row; j -= 1, k -=
                        1) {
                        if (board[j][k] !== '-') {
                            console.log(currentPiece);
                            console.log('no; there is figure on the way');
                            needToContinue = true;
                            break;
                        }
                    }
                    if (needToContinue) {
                        continue;
                    } else {
                        console.log(currentPiece);
                        console.log('yes');
                    }
                } else {
                    //startRow > endRow and startCol < endCol
                    for (j = realStartIndexes.row - 1, k = realStartIndexes.col + 1; j >= realEndIndexes.row; j -= 1, k +=
                        1) {
                        if (board[j][k] !== '-') {
                            console.log(currentPiece);
                            console.log('no; there is figure on the way');
                            needToContinue = true;
                            break;
                        }
                    }
                    if (needToContinue) {
                        continue;
                    } else {
                        console.log(currentPiece);
                        console.log('yes');
                    }
                }
            } else {
                if (realStartIndexes.col > realEndIndexes.col) {
                    //startRow < endRow and startCol > endCol
                    for (j = realStartIndexes.row + 1, k = realStartIndexes.col - 1; j <= realEndIndexes.row; j += 1, k -=
                        1) {
                        if (board[j][k] !== '-') {
                            console.log(currentPiece);
                            console.log('no; there is figure on the way');
                            needToContinue = true;
                            break;
                        }
                    }
                    if (needToContinue) {
                        continue;
                    } else {
                        console.log(currentPiece);
                        console.log('yes');
                    }
                } else {
                    //startRow < endRow and startCol < endCol
                    for (j = realStartIndexes.row + 1, k = realStartIndexes.col + 1; j <= realEndIndexes.row; j += 1, k +=
                        1) {
                        if (board[j][k] !== '-') {
                            console.log(currentPiece);
                            console.log('no; there is figure on the way');
                            needToContinue = true;
                            break;
                        }
                    }
                    if (needToContinue) {
                        continue;
                    } else {
                        console.log(currentPiece);
                        console.log('yes');
                    }
                }
            }
        }

        /*console.log(currentPiece);
        console.log('yes');*/
    }

    console.log(`rows: ${rows}`);
    console.log(`cols: ${cols}`);
    console.log(`board: ${board}`);
    console.log(`moves: ${moves}`);
    console.log(`tests: ${tests}`);
    console.log(`move1: ${GetMoveIndexes(moves[0].split(' ')[0]).col}`);
    console.log('yes'); // or console.log('no');
}

solve(['3',
    '4',
    '--R-',
    'B--B',
    'Q--Q',
    '12',
    'd1 b3',
    'a1 a3',
    'c3 b2',
    'a1 c1',
    'a1 b2',
    'a1 c3',
    'a2 b3',
    'd2 c1',
    'b1 b2',
    'c3 b1',
    'a2 a3',
    'd1 d3'
]);
