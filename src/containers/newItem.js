import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Item from '../components/creatItems';
import { createItem } from '../Redux/actions/items';

const newItem = () => {
  const dispatch = useDispatch();
  const [item, setItem] = useState({
    name: '',
    description: '',
  });

  const handleChange = (e) => {
    setItem({ ...item, name: e.target.value, date: new Date() });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createItem(item));
    setItem({
      name: '',
      description: '',
    });
  };
  return (
    <div>
      <Item
        name={item.name}
        description={item.description}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        path={`/items/${item.id}`}
      />
    </div>
  );
};

export default newItem;

// import React, { useState, useRef } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { createItem } from '../Redux/actions/items';
// import Items from '../components/creatItems';

// // const required = (value) => {
// //   if (!value) {
// //     return (
// //       <div className="alert alert-danger" role="alert">
// //         This field is required!
// //       </div>
// //     );
// //   }
// // };

// // const vname = (value) => {
// //   if (value.length < 3 || value.length > 20) {
// //     return (
// //       <div className="alert alert-danger" role="alert">
// //         The username must be between 3 and 20 characters.
// //       </div>
// //     );
// //   }
// // };

// // const vdescription = (value) => {
// //   if (value.length < 3 || value.length > 100) {
// //     return (
// //       <div className="alert alert-danger" role="alert">
// //         The username must be between 3 and 100 characters.
// //       </div>
// //     );
// //   }
// // };

// const ItemsContainer = () => {
//   const form = useRef();
//   // const checkBtn = useRef();
//   const [successful, setSuccessful] = useState(false);
//   const [name, setName] = useState('');
//   const [description, setDescription] = useState('');
//   const [loading, setLoading] = useState(false);

//   const { message } = useSelector((state) => state.message);

//   const dispatch = useDispatch();

//   const onChangeName = (e) => {
//     const name = e.target.value;
//     setName(name);
//   };

//   const onChangeDescription = (e) => {
//     const description = e.target.value;
//     setDescription(description);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     setLoading(true);

//     form.current.validateAll();

//     dispatch(createItem(name, description))
//       .then(() => {
//         // props.history.push('/profile');
//         window.location.reload();
//       })
//       .catch(() => {
//         setLoading(false);
//       });
//   };

//   const handleRegister = (e) => {
//     e.preventDefault();

//     setSuccessful(false);

//     form.current.validateAll();

//     // if (checkBtn.current.context._errors.length === 0) {
//     dispatch(createItem(name, description))
//       .then(() => {
//         setSuccessful(true);
//       })
//       .catch(() => {
//         setSuccessful(false);
//       });
//     // }
//   };

//   const items = useSelector((state) => state.itemReducer);

//   return (
//     <>
//       {items.items && items.items.map((item) => (
//         <Items
//           key={item.id}
//           id={item.id}
//           name={item.title}
//           description={item.description}
//           path={`/items/${item.id}`}
//           onChangeName={onChangeName}
//           onChangeDescription={onChangeDescription}
//           handleSubmit={handleSubmit}
//           // required={required}
//           // vname={vname}
//           // vdescription={vdescription}
//           handleRegister={handleRegister}
//           successful={successful}
//           message={message}
//           loading={loading}
//         />
//       ))}
//     </>
//   );
// };

// ItemsContainer.propTypes = {

// };

// export default ItemsContainer;
