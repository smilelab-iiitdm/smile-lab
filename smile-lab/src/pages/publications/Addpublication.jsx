import React, {useState} from "react";
import Title from "../../partials/Title";

const Pubs = () =>{
    const [values,setValues] = useState({
      title: '',
      desc: '',
      category: '',
      volume: '',
      pages: '',
      year: '',
      doi: '',
      authors: ''
    })

    const handleChange =e => {
      const {name, value} = e.target
      setValues({
        ...values, 
        [name] : value 
      });
  };

  async function performPostHttpRequest(flink,body) {
    if(!flink || !body)
    {
      throw new Error("Some params not sent");
    }
    try{
      const rawRes = await fetch(flink,{
        method:"POST",
        headers:{
          "Content-type":"application/json; charset=UTF-8"
        },
        body: JSON.stringify(body)
      });

      const content = await rawRes.json();
      return content;
    }
    catch(err) {
      console.error(`Error at fetch POST: ${err}`);
      throw err;
    }
  };

const handleSubmit = e => {
    e.preventDefault();

    const response = performPostHttpRequest('http://localhost:5000/api/publications/add',values);
      console.log(response);
  
      if(response)
        alert("success");
      else
        alert("we failed");

};

      return (
        <React.Fragment>
            <div className="container-fluid my-5 px-5 page-fade">
              <Title title="Add Publication"></Title>
            <form id="AddPubs" onSubmit={handleSubmit}>
              <div class="form-group">
                <label for="title">Title</label>
                <input type="text" class="form-control" id="title" name="title" placeholder="Publication Title" value={values.title} onChange={handleChange}></input>
                </div>
                <div class="form-group">
                <label for="authors">Authors</label>
                <input type="text" class="form-control" id="authors" name="authors" placeholder="Publication Authors" value={values.authors} onChange={handleChange}></input>
                </div>
                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="desc">Publisher</label>
                    <input type="text" class="form-control" id="desc" name="desc" value={values.desc} onChange={handleChange}></input>
                  </div>
                  <div class="form-group col-md-6">
                    <label for="category">Category</label>
                    <input type="text" class="form-control" id="category" name="category" value={values.category} onChange={handleChange}></input>
                  </div>
                </div>
                <div class="form-row">
                <div class="form-group col-md-4">
                <label for="volume">Volume</label>
                <input type="text" class="form-control" id="volume" name="volume" value={values.vloume} onChange={handleChange}></input>
                </div>
                <div class="form-group col-md-4">
                <label for="pages">Pages</label>
                <input type="text" class="form-control"  id="pages" name="pages" value={values.pages} onChange={handleChange}></input>
                </div>
                <div class="form-group col-md-4">
                <label for="year">Year</label>
                <input type="text" class="form-control"  id="year" name="year" value={values.year} onChange={handleChange}></input>
                </div>
              </div>
              <div class="form-group">
                <label for="doi">DOI</label>
                <input type="text" class="form-control"  id="doi" name="doi" placeholder="Publication DOI" value={values.doi} onChange={handleChange} ></input>
                </div>
                <div>
                <button type="submit" class="btn btn-primary" id="subbut">Add Publication</button>
                </div>
            </form>
            <br>
            </br>
            </div>
        </React.Fragment>
      );
  
    }

export default Pubs;
