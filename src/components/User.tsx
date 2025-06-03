import type { FC } from "react";

interface UserShape {
    name: string;
    age: number;
    isStudent: boolean;
}

const User: FC<UserShape> = ({name, age, isStudent}) => {
return (
    <div>
      <h2>Name: {name}</h2>
      <h2>Age: {age}</h2>
      <h2>Student: {isStudent.toString()}</h2>
    </div>
  )
}

export default User
