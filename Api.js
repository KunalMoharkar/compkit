import React from 'react';

export const  fetchQuotes = async()=>{

    const response = await fetch('https://programming-quotes-api.herokuapp.com/quotes/page/2');
    const json = await response.json();
    this.setState({ data: json });

  }
