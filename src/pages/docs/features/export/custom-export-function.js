function CustomExportFunction() {
  return (
    <MaterialTable
      title="Overriding Export Function Preview"
      columns={[
        { title: 'Name', field: 'name' },
        { title: 'Surname', field: 'surname' },
        { title: 'Birth Year', field: 'birthYear', type: 'numeric' },
        {
          title: 'Birth Place',
          field: 'birthCity',
          lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },
        },
        {
          title: 'Mother',
          field: 'family',
          customExport: rowData => rowData.family.mother
        },
      ]}
      data={[
        { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63, family: {mother:'Maisy', father:'Malcolm'} },
        { name: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity: 34, family: {mother:'Zoe', father:'Zac'} },
      ]}        
      options={{
        exportButton: true
      }}
    />
  )
}
