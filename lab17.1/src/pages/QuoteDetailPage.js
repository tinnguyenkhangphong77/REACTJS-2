import { useParams, Link } from "react-router-dom";

function QuoteDetailPage() {
  const params = useParams();
  return (
    <>
      <h1>Quote Detail Page</h1>

      <p>{params.quoteId}</p>
    </>
  );
}
export default QuoteDetailPage;
