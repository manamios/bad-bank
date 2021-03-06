function AllData() {
  const ctx = React.useContext(UserContext);

  let allUserDataCards = ctx.users.map((user, i) => (
    <div key={user.name + i} className="col">
      <Card
        txtcolor="black"
        header={i + 1}
        title={user.name}
        body={
          <>
            <p>E-mail: {user.email}</p>
            <p> Password: {user.password}</p>
          </>
        }
      />
    </div>
  ));
  
  return (
    <div className="row row-cols-1 row-cols-md-3 g-4">{allUserDataCards}</div>
  );
}
