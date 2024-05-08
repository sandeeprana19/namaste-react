const Contact = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold p-4 m-4">Contact us page</h1>
      <form>
        <input
          type="text"
          placeholder="name"
          className="border border-black m-2 p-2"
        />
        <input
          type="text"
          placeholder="message"
          className="border border-black m-2 p-2"
        />
        <button className="border border-black m-2 p-2 bg-gray-100 rounded-lg">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
