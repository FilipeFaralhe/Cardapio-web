import React, { useState, FormEvent } from 'react';

import { useHistory } from 'react-router-dom';

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';

import { TiWarningOutline } from "react-icons/ti";

import api from "../../services/api";

import './styles.css';
import { AnimationContainer } from './styles';

export default function TeacherForm(){

  const history = useHistory();

  const [name, setName] = useState('');
  const [avatar, setAvatar] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [bio, setBio] = useState('');

  const [subject, setSubject] = useState('');
  const [cost, setCost] = useState('');

  const [scheduleItems, setScheduleItems] = useState([{ week_day: 0, from: '', to: '' }]);

  function addNewScheduleItem(){
    setScheduleItems([
      ...scheduleItems,
      {
        week_day: 0,
        from: '',
        to: ''
      }
    ]);
  }

  function handleCreateClass(e: FormEvent){
    e.preventDefault();

    console.log({
      name,
      avatar,
      whatsapp,
      bio,
      subject,
      cost,
      scheduleItems
    });

    api.post('classes', {
      name,
      avatar,
      whatsapp,
      bio,
      subject,
      cost: Number(cost),
      schedule: scheduleItems
    }).then(() => {
      alert('Cadastro realizado com sucesso!');

      history.push('/');
    }).catch(() => {
      alert('Erro no cadastro!');
    });
  }

  function setScheduleItemValue(position: number, field: string, value: string) {
    //dificil...
    const updatedScheduleItems = scheduleItems.map((scheduleItem, index) => {
      if(index === position){
        return { ...scheduleItem, [field]: value };
      }

      return scheduleItem;
    });

    setScheduleItems(updatedScheduleItems);
  }

  return (
    <div id="page-teacher-form" className="container">
     <PageHeader/>
     <AnimationContainer>
        <main>
          <form onSubmit={handleCreateClass}>
            <fieldset>
              <legend>Dados do restaurante</legend>
              <Input
                name="name"
                label="Nome"
                value={name}
                onChange={(e) => { setName(e.target.value) }}
              />

              <Input
                name="whatsapp"
                label="WhatsApp"
                value={whatsapp}
                onChange={(e) => { setWhatsapp(e.target.value) }}
              />
            </fieldset>

            <fieldset>
              <legend>Dados do prato</legend>

              <Input
                name="food"
                label="Nome do prato"
                value={avatar}
                onChange={(e) => { setAvatar(e.target.value) }}
              />

              
              <Input
                name="image"
                label="Imagem"
                value={avatar}
                onChange={(e) => { setAvatar(e.target.value) }}
              />

              
              <Textarea
                name="description"
                label="Descrição"
                value={bio}
                onChange={(e) => { setBio(e.target.value) }}
              />

              <Select
                name="category"
                label="Categoria"
                value={subject}
                onChange={(e) => { setSubject(e.target.value) }}
                options={[
                  { value: 'Pizza', label: 'Pizza' },
                  { value: 'Lanches', label: 'Lanches' },
                  { value: 'Hambúrguer', label: 'Hambúrguer' },
                  { value: 'Japonesa', label: 'Japonesa' },
                  { value: 'Brasileira', label: 'Brasileira' },
                  { value: 'Bebidas', label: 'Bebidas' },
                  { value: 'Açaí', label: 'Açaí' },
                  { value: 'Doces e Bolos', label: 'Doces e Bolos' },
                  { value: 'Italiana', label: 'Italiana' },
                  { value: 'Chinesa', label: 'Chinesa' }
                ]}
              />
              <Input
                name="price"
                label="Preço"
                value={cost}
                onChange={(e) => { setCost(e.target.value) }}
                />
            </fieldset>
          

            <footer>
              <p>
                <TiWarningOutline size={26}/>
                Importante! <br />
                Preencha todos os dados
              </p>
              <button type="submit">Salvar cadastro</button>
            </footer>
          </form>
        </main>
      </AnimationContainer>
    </div>
  );
}