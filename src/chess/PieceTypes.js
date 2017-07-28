/**
 * @flow
 */

export type PieceType =
  'king' | 'queen' | 'rook' | 'knight' | 'bishop' | 'pawn';

const PieceTypes: {[key: string]: PieceType} = {
  'BISHOP': 'bishop',
  'KING': 'king',
  'KNIGHT': 'knight',
  'QUEEN': 'queen',
  'PAWN': 'pawn',
  'ROOK': 'rook',
};

export default PieceTypes;
