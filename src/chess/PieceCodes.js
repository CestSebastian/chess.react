/**
 * @flow
 */

import PieceColors from './PieceColors';
import PieceTypes from './PieceTypes';

const PieceCodes = {};

PieceCodes[PieceColors.WHITE] = {};
PieceCodes[PieceColors.WHITE][PieceTypes.KING] = '\u2654';
PieceCodes[PieceColors.WHITE][PieceTypes.QUEEN] = '\u2655';
PieceCodes[PieceColors.WHITE][PieceTypes.ROOK] = '\u2656';
PieceCodes[PieceColors.WHITE][PieceTypes.BISHOP] = '\u2657';
PieceCodes[PieceColors.WHITE][PieceTypes.KNIGHT] = '\u2658';
PieceCodes[PieceColors.WHITE][PieceTypes.PAWN] = '\u2659';

PieceCodes[PieceColors.BLACK] = {};
PieceCodes[PieceColors.BLACK][PieceTypes.KING] = '\u265A';
PieceCodes[PieceColors.BLACK][PieceTypes.QUEEN] = '\u265B';
PieceCodes[PieceColors.BLACK][PieceTypes.ROOK] = '\u265C';
PieceCodes[PieceColors.BLACK][PieceTypes.BISHOP] = '\u265D';
PieceCodes[PieceColors.BLACK][PieceTypes.KNIGHT] = '\u265E';
PieceCodes[PieceColors.BLACK][PieceTypes.PAWN] = '\u265F';

export default PieceCodes;
