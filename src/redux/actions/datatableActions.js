import { enqueueSnackbar } from "./notifierActions";

export const initializeOptions = payload => ({
  type: "INITIALIZE_OPTIONS",
  payload
});

export const updateComponentSize = () => ({
  type: "UPDATE_COMPONENT_SIZE"
});

export const sortColumns = payload => ({
  type: "SORT_COLUMNS",
  payload
});

export const setRowsPerPage = payload => ({
  type: "SET_ROWS_PER_PAGE",
  payload
});

export const setPage = payload => ({
  type: "SET_PAGE",
  payload
});

export const setIsScrolling = payload => ({
  type: "SET_IS_SCROLLING",
  payload
});

export const addRowEdited = payload => ({
  type: "ADD_ROW_EDITED",
  payload
});

export const setRowEdited = payload => ({
  type: "SET_ROW_EDITED",
  payload
});

export const saveRowEdited = payload => ({
  type: "SAVE_ROW_EDITED",
  payload
});

export const revertRowEdited = payload => ({
  type: "REVERT_ROW_EDITED",
  payload
});

export const deleteRow = payload => ({
  type: "DELETE_ROW",
  payload
});

export const selectRow = payload => ({
  type: "SELECT_ROW",
  payload
});

export const setRowsSelected = payload => ({
  type: "SET_ROWS_SELECTED",
  payload
});

export const search = payload => ({
  type: "SEARCH",
  payload
});

export const setColumnVisibilty = payload => ({
  type: "SET_COLUMN_VISIBILITY",
  payload
});

export const setUserConfiguration = payload => ({
  type: "SET_USER_CONFIGURATION",
  payload
});

export const refreshRowsSuccess = payload => ({
  type: "REFRESH_ROWS_SUCCESS",
  payload
});

export const refreshRowsError = () => ({
  type: "REFRESH_ROWS_ERROR"
});

export const refreshRowsStarted = () => ({
  type: "REFRESH_ROWS_STARTED"
});

export const refreshRows = payload => {
  const key = new Date().getTime() + Math.random();
  return dispatch => {
    dispatch(refreshRowsStarted());
    return Promise.resolve(payload())
      .then(res => {
        dispatch(
          enqueueSnackbar({
            message: "Rows have been refreshed.",
            options: {
              key,
              variant: "success"
            }
          })
        );
        dispatch(refreshRowsSuccess(res));
      })
      .catch(err => {
        dispatch(
          enqueueSnackbar({
            message: "Rows couldn't be refreshed.",
            options: {
              key,
              variant: "error"
            }
          })
        );
        dispatch(refreshRowsError(err));
      });
  };
};

export const orderByColumns = payload => ({
  type: "ORDER_BY_COLUMNS",
  payload
});

export const updateOptions = payload => ({
  type: "UPDATE",
  payload
});