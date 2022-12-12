import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import DetailPageAction from '../components/DetailPageAction';
import DetailPageBody from '../components/DetailPageBody';
import {  deleteNote, getNote} from '../utils/local-data';
import Page404 from './Page404';

function DetailPageWrapper() {
   const { id } = useParams();
   const navigate = useNavigate();

   return <DetailPage id={id} navigate={navigate} />
}

class DetailPage extends Component {
   constructor(props) {
      super(props);

      this.state = {
         note: getNote(props.id),
      }

      this.onDeleteHandler = this.onDeleteHandler.bind(this);
   }



   onDeleteHandler(id) {
      deleteNote(id);
      this.props.navigate('/');
   }

   render() {
      if (this.state.note) {
         return (
            <section className='detail-page'>
               <DetailPageBody note={this.state.note} />
               <DetailPageAction id={this.props.id} onDelete={this.onDeleteHandler} />
            </section>
         )
      }
      return (
         <Page404 />
      )
   }
}

DetailPage.propTypes = {
   id: PropTypes.string,
   navigate: PropTypes.func.isRequired,
}

export default DetailPageWrapper;