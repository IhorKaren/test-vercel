export const handlePending = (state) => {
  state.isLoading = true;
};

export const handleFulfilled = (state, { payload }) => {
  state.isLoading = false;
  state.list = payload;
};

export const AddHandleFulfilled = (state, { payload }) => {
  state.isLoading = false;
  state.list.push(payload);
};

export const handleRejected = (state, { payload }) => {
  state.isLoading = false;
};
