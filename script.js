// Waits for the DOM to be fully loaded before the code executes
document.addEventListener("DOMContentLoaded", function() {
  // gets btn that will retrieve data
  let addDataBtn = document.getElementById("addData");
  addDataBtn.addEventListener("click", function() {
      // Load the XML data from class.xml
      let xmlData = new XMLHttpRequest();
      xmlData.open("GET", "class.xml", false);
      xmlData.send(null);

      // Load the XSLT stylesheet called transformXMLData.xsl
      let xslData = new XMLHttpRequest();
      xslData.open("GET", "transformXMLData.xsl", false); // Synchronous request
      xslData.send(null);

      // creates XSLT processor then imports style sheet
      let xsltProcessor = new XSLTProcessor();
      xsltProcessor.importStylesheet(xslData.responseXML);

      // Transforms XML data
      let resultDocument = xsltProcessor.transformToDocument(xmlData.responseXML);
      let resultHTML = new XMLSerializer().serializeToString(resultDocument);

      // Displays the transformed content into index.html section
      document.getElementById("studentTable").innerHTML = resultHTML;
  });
});

function removeData() {
  let element = document.getElementById('studentTable');
  element.innerHTML = `
  <thead>
    <tr>
      <th>Name</th>
      <th>Age</th>
    </tr>
  </thead>
  <tbody id="studentTableBody">
    <tr>
      <td>N/A</td>
      <td>N/A</td>
    </tr>
  </tbody>
  `;
}
