
function PatientCard({patient}){
    return (
        <div class="card">
  
  <div class="card-body">
    <h5 class="card-title">{patient.name}</h5>
    <p class="card-text"><strong>Weight:</strong>{patient.weight}</p>
    <p class="card-text"><strong>Gendar:</strong>{patient.gender}</p>
    <p class="card-text"><strong>Age:</strong>{patient.age}</p>
    <p class="card-text"><strong>Email:</strong>{patient.email}</p>
    <p class="card-text"><strong>Disease:</strong>{patient.disease}</p>
    <p class="card-text"><strong>Doctor Name:</strong>{patient.doctor.name}</p>
    <p class="card-text"><strong>Doctor Specialization:</strong>{patient.doctor.specialization}</p>

    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
    )
}

export default PatientCard