import {
  dimensions,
  keyColumn,
  font,
  data,
  userConfiguration,
  pagination,
  rowsEdited,
  rowsSelected,
  refreshRows,
  isRefreshing,
  searchTerm,
  orderBy,
  rowsPerPage
} from "./optionsObjectSample";

const mergedMinimumOptionsSample = {
  title: "",
  dimensions: {
    ...dimensions,
    datatable: {
      width: "100vw",
      widthNumber: 1024,
      totalWidthNumber: 0
    },
    body: {
      height: "300px",
      heightNumber: 300
    }
  },
  rowsEdited,
  rowsSelected,
  refreshRows,
  isRefreshing,
  searchTerm,
  actions: null,
  keyColumn,
  data,
  orderBy,
  font,
  pagination: {
    ...pagination,
    rowsCurrentPage: data.rows
  },
  features: {
    canEdit: false,
    canPrint: false,
    canDownload: false,
    canSearch: false,
    canDelete: false,
    canSelectRow: false,
    canRefreshRows: false,
    canOrderColumns: false,
    canSaveUserConfiguration: false,
    userConfiguration: {
      ...userConfiguration,
      columnsOrder: [...userConfiguration.columnsOrder]
    },
    rowsPerPage,
    additionalIcons: [],
    selectionIcons: []
  }
};
export default mergedMinimumOptionsSample;