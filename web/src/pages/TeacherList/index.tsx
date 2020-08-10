import React, { useState, FormEvent } from 'react'

import { Search } from 'react-feather';

import PageHeader from '../../components/PageHeader';
import TeacherItem, {Prato} from '../../components/TeacherItem';
import Input from '../../components/Input';
import Select from '../../components/Select';

import api from '../../services/api';

import './styles.css';


export default function TeacherList(){
  const [prato, setPrato] = useState([]);

  const [category, setCategory] = useState('');
  const [cost, setCost] = useState('');

  // useEffect(() => {}, []); função, quando eu quero disparar essa função?

  async function searchTeachers(e: FormEvent) {
    e.preventDefault();

    const res = await api.get('prato', {
      //query parms =>  parms
      params: {
        category,
        cost
      }
    });

    setPrato(res.data);
  }

  return (
    <div id="page-teacher-list" className="container">
     <PageHeader>
       <form id="search-teachers" onSubmit={searchTeachers}>
       <Select
          name="category"
          label="Categoria"
          value={category}
          onChange={e => {setCategory(e.target.value)}}
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
          <button type="submit">
            <Search />
          </button>
       </form>
     </PageHeader>
      <main>
        {prato.map((prato: Prato) => {
          return <TeacherItem key={prato.id} prato={prato}/>;
        })}
      </main>

    </div>
  );
}