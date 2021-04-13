import React from 'react';
import { Text, ScrollView } from 'react-native';
import styled from 'styled-components/native';

const ChampionView = styled.ScrollView`
  padding: 10px;
`;

const Champion = ({ champion }) => {
  console.log(champion);
  return (
    <ChampionView>
      <Text>
          champ
        {/* Note by {note.author.username} / Published{' '} */}
        {/* {format(new Date(note.createdAt), 'MMM do yyyy')} */}
      </Text>
      {/* <Markdown>{note.content}</Markdown> */}
    </ChampionView>
  );
};

export default Champion;
