import { styled } from "@mui/material/styles";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import ReviewTable from "src/components/ReviewTable";
import { NoFoundBox, H3, Loader } from "src/components";
import { Container } from "./ReviewsTableComponent";

const StyledTable = styled(TableContainer)(({ theme }) => ({
  borderRadius: "17px 17px 0px 0px",
  background: "#fff",
  boxShadow: "0px 4px 15px 0px rgba(0, 0, 0, 0.1)",
}));

export default function ReviewsList({
  rows,
  handleDelete,
  handleView,
  loading,
}) {
  return (
    <Container>
      {loading && <Loader width="35px" height="35px" />}
      <StyledTable component={Paper}>
        {!loading && rows?.length ? (
          <ReviewTable
            rows={rows}
            handleView={handleView}
            handleDelete={handleDelete}
          />
        ) : (
          !loading && (
            <NoFoundBox>
              <H3>No Reviews Found</H3>
            </NoFoundBox>
          )
        )}
      </StyledTable>
    </Container>
  );
}
