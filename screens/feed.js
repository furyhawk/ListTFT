import React from 'react';
import {connect} from 'react-redux';

import ChampionList from '../components/ChampionList';
// import Loading from '../components/Loading';


// our dummy data
// const champions = [
//     { id: 0, name: 'Giant Steps' },
//     { id: 1, name: 'Tomorrow Is The Question' },
//     { id: 2, name: 'Tonight At Noon' },
//     { id: 3, name: 'Out To Lunch' },
//     { id: 4, name: 'Green Street' },
//     { id: 5, name: 'In A Silent Way' },
//     { id: 6, name: 'Lanquidity' },
//     { id: 7, name: 'Nuff Said' },
//     { id: 8, name: 'Nova' },
//     { id: 9, name: 'The Awakening' }
//   ];
console.log(this.props);
const {champions} = this.props;

const Feed = props => {
  console.log(Array.isArray(champions));
  return <ChampionList champions={champions} navigation={props.navigation} />;
};

const mapStateToProps = (state) => ({
  champions: state.championReducer.champions
})

Feed.navigationOptions = {
  title: 'Feed'
};

export default connect(mapStateToProps) (Feed);
