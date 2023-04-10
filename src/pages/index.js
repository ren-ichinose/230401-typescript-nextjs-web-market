const Home = ({ message, allItems }) => {
  return <div>Home</div>;
};

export default Home;

export const getServerSideProps = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/item/readall`
  );
  const allItems = await res.json();
  return {
    props: allItems,
  };
};
