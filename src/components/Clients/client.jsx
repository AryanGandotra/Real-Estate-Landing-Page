import "./client.css";

const Client = (client) => {
  return (
    <div className="clientWrapper">
      <img src={client.client} alt="client" className="client" />
    </div>
  );
};

export default Client;
