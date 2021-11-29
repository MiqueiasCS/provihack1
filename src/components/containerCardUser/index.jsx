import { PersonCard } from "../cardUser";

export const ContainerPersonCardUser = ({ filteredUsers }) => {
  return (
    <div>
      {filteredUsers.map((person) => (
        <PersonCard key={person.id} person={person} />
      ))}
    </div>
  );
};
