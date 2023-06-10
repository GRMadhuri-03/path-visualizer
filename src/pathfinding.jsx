import React from 'react';
import './pathfindingV.css';
getInitialGrid = (
  rowCount = this.state.ROW_COUNT,
  colCount = this.state.COLUMN_COUNT
) => {
  const initialGrid = [];
  for (let row = 0; row < rowCount; row++) {
    const currentRow = [];
    for (let col = 0; col < colCount; col++) {
      currentRow.push(this.createNode(row, col));
    }
    initialGrid.push(currentRow);
  }
  return initialGrid;
};
createNode = (row, col) => {
  return {
    row,
    col,
    isStart:
      row === this.state.START_NODE_ROW && col === this.state.START_NODE_COL,
    isFinish:
      row === this.state.FINISH_NODE_ROW &&
      col === this.state.FINISH_NODE_COL,
    distance: Infinity,
    distanceToFinishNode:
      Math.abs(this.state.FINISH_NODE_ROW - row) +
      Math.abs(this.state.FINISH_NODE_COL - col),
    isVisited: false,
    isWall: false,
    previousNode: null,
    isNode: true,
  };
};
