import React, { useState, FormEvent } from 'react'

import { Search } from 'react-feather';

import PageHeader from '../../components/PageHeader';
import TeacherItem, {Teacher} from '../../components/TeacherItem';
import Input from '../../components/Input';
import Select from '../../components/Select';

import api from '../../services/api';

import './styles.css';


export default function TeacherList(){
  const [teachers, setTeachers] = useState([]);

  const [subject, setSubject] = useState('');
  const [week_day, setWeekDay] = useState('');
  const [time, setTime] = useState('');

  // useEffect(() => {}, []); função, quando eu quero disparar essa função?

  async function searchTeachers(e: FormEvent) {
    e.preventDefault();

    const res = await api.get('classes', {
      //query parms =>  parms
      params: {
        subject,
        week_day,
        time,
      }
    });

    setTeachers(res.data);
  }

  return (
    <div id="page-teacher-list" className="container">
     <PageHeader>
       <form id="search-teachers" onSubmit={searchTeachers}>
       <Select
          name="subject"
          label="Matéria"
          value={subject}
          onChange={e => {setSubject(e.target.value)}}
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
          <button type="submit">
            <Search />
          </button>
       </form>
     </PageHeader>
      <main>
        {teachers.map((teacher: Teacher) => {
          return <TeacherItem key={teacher.id} teacher={teacher}/>;
        })}

      </main>

    </div>
  );
}