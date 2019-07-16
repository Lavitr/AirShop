import React from 'react';
import { connect } from 'react-redux'
import img from '../assets/loading_spinner.gif'



let Loading = ( props: any ) => (
    props.loading ?
        <div style={{ textAlign: 'center' }}>
            <img src={img} alt='loading' />
            <h1>LOADING</h1>
        </div> :
        null
);

const mapStateToProps = (state: any) => ({
    loading: state.loading
})

export default connect(
    mapStateToProps,
    null
)(Loading)
