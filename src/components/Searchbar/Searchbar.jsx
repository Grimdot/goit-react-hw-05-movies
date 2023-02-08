import {
  SearchbarButton,
  SearchbarForm,
  SearchbarInput,
  InputWrap,
  SearchbarButtonIcn,
} from './Searchbar.styled';

const Searchbar = ({ handleSubmit }) => {
  return (
    <SearchbarForm onSubmit={handleSubmit}>
      <InputWrap>
        <SearchbarButton type="submit">
          <SearchbarButtonIcn />
        </SearchbarButton>
        <SearchbarInput type="text" name="name" />
      </InputWrap>
    </SearchbarForm>
  );
};

export default Searchbar;
