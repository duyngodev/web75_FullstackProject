import { Button, IconButton } from "@mui/material";
import { Typography } from "@mui/material";
import React from "react";
import AddIcon from "@mui/icons-material/Add";
import {
  TableContainer,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import OfflinePinIcon from "@mui/icons-material/OfflinePin";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { Colors } from "../assets/style/theme_admin.js";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import Grid from "@mui/material/Unstable_Grid2/Grid2.js";
import TextField from "@mui/material/TextField";
// import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const link = "http://localhost:3001/product";

const AdminProducts = () => {
  const [products, setProducts] = React.useState([]);
  React.useEffect(() => {
    axios
      .get(`${link}`)
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => console.log(error));
  }, []);
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const [openUpdate, setOpenUpdate] = React.useState(false);
  const [payloadUpdate, setPayloadUpdate] = React.useState({});
  const [initialValues, setInitialValues] = React.useState({
    name: "",
    price: "",
    imgURL1: "",
    imgURL2: "",
    description: "",
    category: "",
    newProduct: false,
    bestSeller: false,
    quantity: "",
  });
  const handleAddProduct = () => {
    setOpen(true);
  };

  const handleEditProduct = (product) => {
    setPayloadUpdate(product);
    setOpenUpdate(true);
  };
  const handleDeleteProduct = async (product) => {
    await axios
      .delete(`${link}/${product._id}`)
      .then((response) => console.log(response.data))
      .catch((err) => console.log(err));
  };
  const handleSubmit = async (values) => {
    await axios
      .post(`${link}/filter`, { values })
      .then((response) => console.log(response.data))
      .catch((err) => console.log(err));
    setOpen(false);
  };

  const handleSubmitUpdate = async (values) => {
    const _id = payloadUpdate._id;
    await axios
      .put(`${link}`, {
        _id,
        name: values.name,
        price: values.price,
        imgURL1: values.imgURL1,
        imgURL2: values.imgURL2,
        description: values.description,
        category: values.category,
        newProduct: values.newProduct,
        bestSeller: values.bestSeller,
        quantity: values.quantity,
      })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
    navigate(`/admin/products`);
    setOpenUpdate(false);
  };

  return (
    <>
      <Typography sx={{ mb: 1 }} variant="h4">
        Products
      </Typography>
      <Button
        startIcon={<AddIcon />}
        variant="contained"
        onClick={handleAddProduct}>
        Add Product
      </Button>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Picture</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>SKU</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Category</TableCell>
              <TableCell>Quantity</TableCell>
              <TableCell>New</TableCell>
              <TableCell>Best Seller</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((p) => {
              return (
                <TableRow key={p._id}>
                  <TableCell sx={{ width: "120px", height: "120px" }}>
                    <img src={p.imgURL1} />
                  </TableCell>
                  <TableCell>{p.name}</TableCell>
                  <TableCell>{p._id}</TableCell>
                  <TableCell>
                    {parseInt(p.price).toLocaleString("it-IT", {
                      style: "currency",
                      currency: "VND",
                    })}
                  </TableCell>
                  <TableCell>{p.description}</TableCell>
                  <TableCell>{p.category}</TableCell>
                  <TableCell>{p.quantity}</TableCell>
                  <TableCell>
                    {p.newProduct ? <OfflinePinIcon /> : ""}
                  </TableCell>
                  <TableCell>
                    {p.bestSeller ? <OfflinePinIcon /> : ""}
                  </TableCell>
                  <TableCell>
                    <IconButton onClick={() => handleEditProduct(p)}>
                      <ModeEditIcon />
                    </IconButton>
                    <IconButton onClick={() => handleDeleteProduct(p)}>
                      <DeleteForeverIcon sx={{ color: Colors.danger }} />
                    </IconButton>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>

      <Dialog open={open} fullWidth maxWidth="lg">
        <DialogTitle>{"Add Product"}</DialogTitle>
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          {({ values }) => (
            <Form>
              <DialogContent>
                <Grid container spacing={2}>
                  <Grid xs={12}>
                    <Field
                      as={TextField}
                      name="name"
                      label="Name"
                      required
                      fullWidth
                    />
                    <ErrorMessage name="name">
                      {(message) => (
                        <Typography color={"red"}>{message}</Typography>
                      )}
                    </ErrorMessage>
                  </Grid>

                  <Grid xs={12}>
                    <Field
                      as={TextField}
                      name="price"
                      label="Price"
                      required
                      fullWidth
                    />
                  </Grid>
                  <Grid xs={12}>
                    <Field
                      as={TextField}
                      name="image"
                      label="ImageURL"
                      required
                      fullWidth
                    />
                  </Grid>
                  <Grid xs={12}>
                    <Field
                      as={TextField}
                      name="description"
                      label="Description"
                      required
                      fullWidth
                    />
                  </Grid>
                  <Grid xs={12}>
                    <Field
                      as={TextField}
                      name="category"
                      label="Category"
                      required
                      fullWidth
                    />
                  </Grid>
                  <Grid xs={12}>
                    <Field
                      as={TextField}
                      name="quantity"
                      label="Quantity"
                      required
                      fullWidth
                    />
                  </Grid>
                  <Grid xs={12}>
                    <label>
                      <span style={{ marginRight: "8px" }}>New Product: </span>
                      <Field type="checkbox" name="newProduct" fullWidth />
                      {`    ${values.newProduct}`}
                    </label>
                  </Grid>
                  <Grid xs={12}>
                    <label>
                      <span style={{ marginRight: "24px" }}>Best Seller: </span>
                      <Field type="checkbox" name="bestSeller" fullWidth />
                      {`    ${values.bestSeller}`}
                    </label>
                  </Grid>
                </Grid>
              </DialogContent>

              <DialogActions>
                <Button type="submit" variant="contained">
                  Save
                </Button>
                <Button autoFocus onClick={() => setOpen(false)}>
                  Cancel
                </Button>
              </DialogActions>
            </Form>
          )}
        </Formik>
      </Dialog>

      <Dialog open={openUpdate} fullWidth maxWidth="lg">
        <DialogTitle>{"Add Product"}</DialogTitle>
        <Formik
          initialValues={{
            name: payloadUpdate.name,
            price: payloadUpdate.price,
            imgURL1: payloadUpdate.imgURL1,
            imgURL2: payloadUpdate.imgURL2,
            description: payloadUpdate.description,
            category: payloadUpdate.category,
            newProduct: payloadUpdate.newProduct,
            bestSeller: payloadUpdate.bestSeller,
            quantity: payloadUpdate.quantity,
          }}
          onSubmit={handleSubmitUpdate}>
          {({ values }) => (
            <Form>
              <DialogContent>
                <Grid container spacing={2}>
                  <Grid xs={12}>
                    <Field
                      as={TextField}
                      name="name"
                      label={`Name: ${payloadUpdate.name}`}
                      required
                      fullWidth
                    />
                  </Grid>

                  <Grid xs={12}>
                    <Field
                      as={TextField}
                      name="price"
                      label={`Price: ${payloadUpdate.price}`}
                      required
                      fullWidth
                    />
                  </Grid>
                  <Grid xs={12}>
                    <Field
                      as={TextField}
                      name="imgURL1"
                      label={`ImageURL`}
                      required
                      fullWidth
                    />
                  </Grid>
                  <Grid xs={12}>
                    <Field
                      as={TextField}
                      name="description"
                      label="Description"
                      required
                      fullWidth
                      placeholder={payloadUpdate.description}
                    />
                  </Grid>
                  <Grid xs={12}>
                    <Field
                      as={TextField}
                      name="category"
                      label={`Category: ${payloadUpdate.category}`}
                      required
                      fullWidth
                    />
                  </Grid>
                  <Grid xs={12}>
                    <Field
                      as={TextField}
                      name="quantity"
                      label={`Quantity: ${payloadUpdate.quantity}`}
                      required
                      fullWidth
                    />
                  </Grid>
                  <Grid xs={12}>
                    <label>
                      <span style={{ marginRight: "8px" }}>New Product: </span>
                      <Field type="checkbox" name="newProduct" fullWidth />
                      {`${values.newProduct}`}
                    </label>
                  </Grid>
                  <Grid xs={12}>
                    <label>
                      <span style={{ marginRight: "24px" }}>Best Seller: </span>
                      <Field type="checkbox" name="bestSeller" fullWidth />
                      {`${values.bestSeller}`}
                    </label>
                  </Grid>
                </Grid>
              </DialogContent>

              <DialogActions>
                <Button type="submit" variant="contained">
                  Update
                </Button>
                <Button autoFocus onClick={() => setOpenUpdate(false)}>
                  Cancel
                </Button>
              </DialogActions>
            </Form>
          )}
        </Formik>
      </Dialog>
    </>
  );
};

export default AdminProducts;
