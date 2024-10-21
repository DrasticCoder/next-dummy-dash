const CsvPage = () => {
    const csvFiles = ['file1.csv', 'file2.csv', 'file3.csv']; // Dummy data
  
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <h2 className="text-2xl font-bold">Past CSV Files</h2>
        <ul className="mt-4">
          {csvFiles.map((file, index) => (
            <li key={index} className="my-2">
              {file}
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default CsvPage;
  