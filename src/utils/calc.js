export const itemIdxByPage = (resultCnt, currentPageNo, pageSize, index) =>
  resultCnt + 1 - ((currentPageNo - 1) * pageSize + index + 1);
