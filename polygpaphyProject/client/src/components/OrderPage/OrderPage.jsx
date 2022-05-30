import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import s from "./OrderPage.module.css";
import SendIcon from "@mui/icons-material/Send";
import { Info } from "./Info";
import { useHttp } from "../../hooks/http.hook";

const OrderPage = () => {
  const initialState = {
    name: "",
    surname: "",
    father: "",
    position: "",
    mailing: "",
    phone: "",
    title: "",
    type: "",
    copies: "",
    numberOfPages: 0,
    reviews: null,
    extractAC: null,
    manuscript: null,
    addInformation: "",
  };
  const [state, setState] = useState(Info);
  const [form, setForm] = useState(initialState);
  const [drag, setDrag] = useState(false);
  const [file, setFile] = useState(null);

  const { request } = useHttp();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const dragStartHandler = (e) => {
    e.preventDefault();
    setDrag(true);
  };
  const dragLeaveHandler = (e) => {
    e.preventDefault();
    setDrag(false);
  };
  const onDropHandler = (e) => {
    e.preventDefault();
    let files = [...e.dataTransfer.files];
    console.log(files);
    setDrag(false);
  };

  const submitHandler = (e) => {
    setForm({ ...form, [e.target.name]: e.target.files[0] });
  };
  console.log(form);

  const onSubmit = async (e) => {
    try {
      const response = await request(
        "http://localhost:5000/api/orders/addOrder",
        "POST",
        {
          form,
        }
      );
      alert("Інформація відправленна!");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <div>
        <div>
          <div className={s.top_text}>
            <h1 className={s.title}>Шановні пані та панове!</h1>
            <p className={s.main_text}>
              Ми раді, що Ви звернулись до нас, і зробимо все можливе, щоб
              співробітництво з компанією «Polygraphy» було приємним і
              взаємовигідним. Якщо Вас зацікавила продукція нашого підприємства,
              <span className={s.bold}> заповніть форму замовлення.</span>
            </p>
          </div>
          <div className={s.main_inputs}>
            <p className={s.title_form}>Форма замовлення</p>
            <div className={s.input_column}>
              <div>
                <div className={s.TextField}>
                  <TextField
                    name="name"
                    id="name"
                    label="Ім'я"
                    variant="standard"
                    onChange={handleChange}
                  ></TextField>
                </div>
                <div className={s.TextField}>
                  <TextField
                    name="father"
                    id="outlined-basic"
                    label="По батькові"
                    variant="standard"
                    onChange={handleChange}
                  ></TextField>
                </div>
                <div className={s.TextField}>
                  <TextField
                    name="mailing"
                    id="outlined-basic"
                    label="Поштова адреса"
                    variant="standard"
                    onChange={handleChange}
                  ></TextField>
                </div>
                <div className={s.TextField}>
                  <TextField
                    name="type"
                    id="outlined-basic"
                    label="Вид видання"
                    variant="standard"
                    onChange={handleChange}
                  ></TextField>
                </div>
                <div className={s.TextField}>
                  <TextField
                    name="numberOfPages"
                    id="outlined-basic"
                    label="Кількість сторінок"
                    variant="standard"
                    onChange={handleChange}
                  ></TextField>
                </div>
              </div>
              <div>
                <div className={s.TextField}>
                  <TextField
                    name="surname"
                    id="outlined-basic"
                    label="Прізвище"
                    variant="standard"
                    onChange={handleChange}
                  ></TextField>
                </div>
                <div className={s.TextField}>
                  <TextField
                    name="position"
                    id="outlined-basic"
                    label="Посада"
                    variant="standard"
                    onChange={handleChange}
                  ></TextField>
                </div>
                <div className={s.TextField}>
                  <TextField
                    name="phone"
                    id="outlined-basic"
                    label="Номер телефону"
                    variant="standard"
                    onChange={handleChange}
                  ></TextField>
                </div>
                <div className={s.TextField}>
                  <TextField
                    name="title"
                    id="outlined-basic"
                    label="Назва видання"
                    variant="standard"
                    onChange={handleChange}
                  ></TextField>
                </div>
                <div className={s.TextField}>
                  <TextField
                    name="copies"
                    id="outlined-basic"
                    label="Кількість примірників"
                    variant="standard"
                    onChange={handleChange}
                  ></TextField>
                </div>
              </div>
            </div>
            {/* <div className={s.app}>
              {drag ? (
                <div
                  onDragStart={(e) => dragStartHandler(e)}
                  onDragLeave={(e) => dragLeaveHandler(e)}
                  onDragOver={(e) => dragStartHandler(e)}
                  onDrop={(e) => onDropHandler(e)}
                >
                  Відпустіть файл, щоб загрузити
                </div>
              ) : (
                <div
                  onDragStart={(e) => dragStartHandler(e)}
                  onDragLeave={(e) => dragLeaveHandler(e)}
                  onDragOver={(e) => dragStartHandler(e)}
                >
                  Перетащіть сюди файли,щоб загрузити
                </div>
              )}
            </div> */}
            <div>
              {" "}
              <TextField
                label="Додаткова інформація"
                id="fullWidth"
                style={{ width: "635px" }}
                name="addInformation"
                onChange={handleChange}
              />
            </div>
            {/* <div className={s.input_file}>
              <button className={s.btn}>Загрузити файл</button>
              <input type="file" name="manuscript" onChange={submitHandler} />
            </div>
            <div className={s.input_file}>
              <button className={s.btn}>Загрузити файл</button>
              <input type="file" name="extractAC" onChange={submitHandler} />
            </div>
            <div className={s.input_file}>
              <button className={s.btn}>Загрузити файл</button>
              <input type="file" name="reviews" onChange={submitHandler} />
            </div> */}
            <div className={s.button}>
              <Button
                variant="contained"
                endIcon={<SendIcon />}
                onClick={onSubmit}
              >
                Відправити
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderPage;
