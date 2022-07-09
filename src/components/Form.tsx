import React from "react";
import styled from "styled-components";

const StyledForm = styled.form`
  input {
    padding: 5px 10px;
    font-size: 18px;
    font-family: "Poppins", sans-serif;
    width: 100%;
    border: 1.5px solid #000;
  }

  .group {
    display: flex;
    gap: 10px;
    justify-content: space-between;
    margin-bottom: 20px;
  }

  .toend input {
    background: transparent;
    cursor: pointer;
    transition: all 100ms;
    background: #e66f6f;
    color: white;
    padding: 5px 30px !important;
    width: 100%;
  }

  .toend input:hover {
    background: #f57b7b;
  }

  .toend {
    display: flex;
    justify-content: flex-end;
  }

  @media (max-width: 700px) {
    .group {
      flex-direction: column !important;
    }
  }
`;

interface FormProps {
  onSubmit: (a: number, b: number) => any;
}

const Form: React.FC<FormProps> = (props) => {
  const [multipicand, setMultipicand] = React.useState<string>("");
  const [multiplier, setMultiplier] = React.useState<string>("");

  const verify = (value: string) => {
    return !isNaN(+value) || ["-", "+"].includes(value);
  };

  return (
    <StyledForm
      onSubmit={(e) => {
        e.preventDefault();

        // 0 * 0 should not be allowed
        if (+multipicand || +multiplier)
          props.onSubmit(+multipicand, +multiplier);
      }}
    >
      <div className="group">
        <input
          type="text"
          onChange={(e) =>
            verify(e.target.value) && setMultipicand(e.target.value)
          }
          value={multipicand}
          placeholder="Multiplicand (M)"
        />
        <input
          type="text"
          onChange={(e) =>
            verify(e.target.value) && setMultiplier(e.target.value)
          }
          value={multiplier}
          placeholder="Multiplier (Q)"
        />
      </div>

      <div className="toend">
        <input type="submit" value="Submit" />
      </div>
    </StyledForm>
  );
};

export default Form;
