import React, { useState } from 'react';

import { Header, Container, Button, TextInput } from './styles';
export default function Home() {
  const [text, setText] = useState('');
  return (
    <>
      <Header>Lista de tarefas</Header>
      <Container>
        <form>
          <TextInput
            name="addTodo"
            type="text"
            value={text}
            placeholder="Adicionar nova tarefa"
            onChange={e => setText(e.target.value)} // => é uma função do ecma script 6
          />
          <Button type="submit">Adicionar</Button>
        </form>
      </Container>
    </> //cria um fragemento do react para permitir que vc crie um componente em um pai
  );
}
