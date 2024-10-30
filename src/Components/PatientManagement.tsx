// src/components/PatientManagement.tsx

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import {
  getAllPatients,
  addPatient,
  updatePatient,
  deletePatient,
  getPatientsByHealthStatus
} from '../services/patientService';

interface Patient {
  id?: string;
  name: string;
  age: number;
  healthStatus: 'crítico' | 'estável' | 'recuperando';
  admissionDate: Date;
  bedNumber: number;
  floor: number;
  room: number;
  expectedDischargeDate?: Date;
  notes?: string;
}

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const Title = styled.h1`
  color: #333;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 5px;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const Select = styled.select`
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

const PatientList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const PatientItem = styled.li`
  background-color: #fff;
  border: 1px solid #ddd;
  margin-bottom: 10px;
  padding: 15px;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 20px;
`;

const PatientManagement: React.FC = () => {
  const [patients, setPatients] = useState<Patient[]>([]);
  const [selectedPatient, setSelectedPatient] = useState<Patient | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState<Omit<Patient, 'id'>>({
    name: '',
    age: 0,
    healthStatus: 'estável',
    admissionDate: new Date(),
    bedNumber: 0,
    floor: 0,
    room: 0,
  });

  useEffect(() => {
    fetchPatients();
  }, []);

  const fetchPatients = async () => {
    const fetchedPatients = await getAllPatients();
    setPatients(fetchedPatients);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isEditing && selectedPatient) {
      await updatePatient(selectedPatient.id!, formData);
    } else {
      await addPatient(formData);
    }
    fetchPatients();
    resetForm();
  };

  const handleEdit = (patient: Patient) => {
    setSelectedPatient(patient);
    setFormData(patient);
    setIsEditing(true);
  };

  const handleDelete = async (id: string) => {
    if (window.confirm('Are you sure you want to delete this patient?')) {
      await deletePatient(id);
      fetchPatients();
    }
  };

  const handleFilterByStatus = async (status: Patient['healthStatus']) => {
    const filteredPatients = await getPatientsByHealthStatus(status);
    setPatients(filteredPatients);
  };

  const resetForm = () => {
    setFormData({
      name: '',
      age: 0,
      healthStatus: 'estável',
      admissionDate: new Date(),
      bedNumber: 0,
      floor: 0,
      room: 0,
    });
    setSelectedPatient(null);
    setIsEditing(false);
  };

  return (
    <Container>
      <Title>Gerenciamento de Pacientes</Title>

      <Form onSubmit={handleSubmit}>
        <Input
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          placeholder="Nome"
          required
        />
        <Input
          name="age"
          type="number"
          value={formData.age}
          onChange={handleInputChange}
          placeholder="Idade"
          required
        />
        <Select
          name="healthStatus"
          value={formData.healthStatus}
          onChange={handleInputChange}
          required
        >
          <option value="crítico">Crítico</option>
          <option value="estável">Estável</option>
          <option value="recuperando">Recuperando</option>
        </Select>
        <Input
          name="admissionDate"
          type="date"
          value={formData.admissionDate.toISOString().split('T')[0]}
          onChange={handleInputChange}
          required
        />
        <Input
          name="bedNumber"
          type="number"
          value={formData.bedNumber}
          onChange={handleInputChange}
          placeholder="Número do Leito"
          required
        />
        <Input
          name="floor"
          type="number"
          value={formData.floor}
          onChange={handleInputChange}
          placeholder="Andar"
          required
        />
        <Input
          name="room"
          type="number"
          value={formData.room}
          onChange={handleInputChange}
          placeholder="Sala"
          required
        />
        <Input
          name="expectedDischargeDate"
          type="date"
          value={formData.expectedDischargeDate?.toISOString().split('T')[0] || ''}
          onChange={handleInputChange}
          placeholder="Data Prevista de Alta"
        />
        <Input
          name="notes"
          value={formData.notes || ''}
          onChange={handleInputChange}
          placeholder="Observações"
        />
        <Button type="submit">{isEditing ? 'Atualizar' : 'Adicionar'} Paciente</Button>
        {isEditing && <Button type="button" onClick={resetForm}>Cancelar Edição</Button>}
      </Form>

      <FilterContainer>
        <Button onClick={() => handleFilterByStatus('crítico')}>Críticos</Button>
        <Button onClick={() => handleFilterByStatus('estável')}>Estáveis</Button>
        <Button onClick={() => handleFilterByStatus('recuperando')}>Recuperando</Button>
        <Button onClick={fetchPatients}>Todos</Button>
      </FilterContainer>

      <PatientList>
        {patients.map(patient => (
          <PatientItem key={patient.id}>
            {patient.name} - {patient.healthStatus}
            <Button onClick={() => handleEdit(patient)}>Editar</Button>
            <Button onClick={() => handleDelete(patient.id!)}>Excluir</Button>
          </PatientItem>
        ))}
      </PatientList>

      {selectedPatient && (
        <div>
          <h2>Detalhes do Paciente</h2>
          <p>Nome: {selectedPatient.name}</p>
          <p>Idade: {selectedPatient.age}</p>
          <p>Estado de Saúde: {selectedPatient.healthStatus}</p>
          <p>Data de Admissão: {selectedPatient.admissionDate.toLocaleDateString()}</p>
          <p>Número do Leito: {selectedPatient.bedNumber}</p>
          <p>Andar: {selectedPatient.floor}</p>
          <p>Sala: {selectedPatient.room}</p>
          <p>Data Prevista de Alta: {selectedPatient.expectedDischargeDate?.toLocaleDateString()}</p>
          <p>Observações: {selectedPatient.notes}</p>
        </div>
      )}
    </Container>
  );
};

export default PatientManagement;