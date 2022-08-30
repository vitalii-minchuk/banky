import { TextInput, View } from "react-native";
import React, { FC } from "react";

interface IField {
  onChange: (value: string) => void;
  value: string;
  placeholder: string;
  isSecure?: boolean;
}
const Field: FC<IField> = ({
  onChange,
  value,
  placeholder,
  isSecure = false,
}) => {
  return (
    <TextInput
      autoCapitalize="none"
      onChangeText={onChange}
      value={value}
      placeholder={placeholder}
      secureTextEntry={isSecure}
      className="rounded-xl bg-gray-200 w-full text-xl pt-3 pb-5 px-5 my-3"
    />
  );
};

export default Field;
