import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {SearchBarHeader, SearchForm, ButtonForm, ButtonLabel, FormInput} from './SearchBarStyled';
// import {Search} from '@styled-icons/bootstrap';
import {Searchengin} from '@styled-icons/fa-brands';



export class SearchBar extends Component {

    state = {
        name: '',
    }

onHandleChange = (e) => {
this.setState({[e.target.name]: e.target.value})
}

handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit({ ...this.state });
    this.setState({ name: '' });
  };

  render() {
    return (
      
        <SearchBarHeader >
  <SearchForm onSubmit={this.handleSubmit} >
    <ButtonForm   type="submit" >
    <Searchengin/>
      <ButtonLabel >Search</ButtonLabel>
    </ButtonForm>

    <FormInput
      onChange={this.onHandleChange}
      name = "name"
      value = {this.state.name}
      type="text"
      autocomplete="off"
      autoFocus
      placeholder="Search images and photos"
    />
  </SearchForm>
</SearchBarHeader>
      
    )
  }
}

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};