import {
  Box,
  Button,
  Checkbox,
  Container,
  Divider,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
  Stack,
  Typography,
} from "@mui/material";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { useState } from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const url = "http://localhost:3001/product"

const ProductList = () => {
  //CSS properties
  const bannerStyle = {
    width: "100%",
    height: "100%",
    backgroundImage:
      "url(https://sugartown.vn/upload/sanpham/banh-kem-16889785646.png)",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  const bannerContainer = {
    height: "700px",
    width: "100%",
  };

  //Button switch filtering
  const [state, setState] = useState({
    New: false,
    sell: false,
  });
  const handleChange = (event) => {
    // cập nhật giá trị checked cho biến New hoặc sell => biến này sau đó được dùng để render lại giao diện
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };
  const { New, sell } = state;

  //danh mục Filtering

  const [toggle, setToggle] = useState("20-11");
  const [filterItem, setFilterItem] = useState("20-11");
  const handleDanhMuc = (e) => {
    setFilterItem(e.target.name);
    setToggle(e.target.value);
  };

  const filterData = [
    {
      name: "20/11",
      category: "20-11",
    },
    {
      name: "BÁNH KEM SỮA",
      category: "BÁNH KEM",
    },
    {
      name: "+ Bánh Kem Sữa Tươi",
      category: "BÁNH KEM",
    },
    {
      name: "+  Bánh Kem Chocolate",
      category: "BÁNH KEM",
    },
    {
      name: "+  Bánh Kem Tạo Hình",
      category: "BÁNH KEM",
    },
    {
      name: "+  Bánh Kem Bắp",
      category: "BÁNH KEM",
    },
    {
      name: "+  Bánh Kem Tráng Gương",
      category: "BÁNH KEM",
    },
    {
      name: "+  Bento",
      category: "BÁNH KEM",
    },
    {
      name: "BÁNH CẤP ĐÔNG",
      category: "BÁNH CẤP ĐÔNG",
    },
    {
      name: "BÁNH COOKIES",
      category: "BÁNH COOKIES",
    },
    {
      name: "BÁNH MÌ - BÁNH NGỌT",
      category: "BÁNH MÌ-BÁNH NGỌT",
    },
    {
      name: "BÁNH LẠNH",
      category: "BÁNH LẠNH",
    },
  ];
  // Get category from URL parameter
  const { category } = useParams();
  const cateName = filterData.filter((item) => item.category === category);
  useEffect(() => {
    setFilterItem(category);
    setToggle(cateName[0].name);
  }, []);
  // Lấy data về
  const [dataProduct, setDataProduct] = useState([]);
  // useEffect(() => {
  //   fetch("https://6562048cdcd355c083247a65.mockapi.io/Products/ProductList", {
  //     method: "GET",
  //   })
  //     .then((response) => {
  //       // if (response.ok) { console.log("SUCCESS") } else { console.log("FAILURE") }
  //       return response.json();
  //     })
  //     .then((data) => setDataProduct(data));
  // }, []);

  //Page of 9 products
  const itemsPerPage = 9;
  const [currentPage, setCurrentPage] = useState(1);
  const [maxPage, setMaxPage] = useState(0)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${url}/filter/?skip=${(currentPage - 1) * itemsPerPage}&limit=${itemsPerPage}&category=${filterItem}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setDataProduct(data.products);
        setMaxPage(data.totalCount)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, [currentPage, filterItem]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const handlePageChange = (pageChange) => {
    setCurrentPage(pageChange);
  };

  // // Filter data products
  // let dataProductFilter = [...dataProduct];
  // if (New) {
  //   dataProductFilter = dataProductFilter.filter((item) => item.newProduct);
  // }
  // if (sell) {
  //   dataProductFilter = dataProductFilter.filter((item) => item.bestSeller);
  // }
  // const dataCategoryFilter = dataProductFilter.filter(
  //   (item) => item.category === filterItem
  // );
  // const dataShow = dataCategoryFilter.slice(indexOfFirstItem, indexOfLastItem);
  // console.log(dataShow)
  const dataShow = dataProduct

  //Max Page for Page of 9 Products
  
  let pages = [];
  for (let i = 1; i <= maxPage/itemsPerPage; i++) {
    pages = [...pages, i];
  }

  return (
    <Box
      sx={{
        backgroundImage: "linear-gradient(#FFFFFF, #FDEDEF )",
        paddingBottom: "300px",
      }}>
      <Box>
        <div style={bannerContainer}>
          <div style={bannerStyle}></div>
        </div>
      </Box>
      <Box>
        <Container
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            mt: "20px",
          }}>
          <Box sx={{ color: "#9d573c" }}>
            {/* Danh mục */}
            <FormControl>
              <FormLabel
                id="demo-radio-buttons-group"
                sx={{
                  textAlign: "left",
                  fontSize: "2rem",
                  textTransform: "uppercase",
                }}>
                Danh mục
              </FormLabel>
              <Divider />
              <RadioGroup
                aria-labelledby="filter-list"
                value={toggle}
                name="radio-buttons-group"
                onChange={handleDanhMuc}
                sx={{ width: "250px" }}>
                {filterData.map((value, i) => {
                  return (
                    <div
                      key={i}
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}>
                      {/* <div>{value}</div> */}
                      <FormControlLabel
                        value={value.name}
                        onClick={handleDanhMuc}
                        control={
                          <Radio
                            icon={<BookmarkBorderIcon />}
                            checkedIcon={<BookmarkIcon />}
                            name={value.category}
                          />
                        }
                        label={value.name}
                      />
                    </div>
                  );
                })}
              </RadioGroup>
            </FormControl>
            {/* Lọc theo */}
            <Box sx={{ display: "flex", color: "#9d573c" }}>
              <FormControl>
                <FormLabel
                  sx={{ fontSize: "30px", textTransform: "uppercase" }}
                  component="legend">
                  Lọc theo
                </FormLabel>
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={New}
                        icon={<BookmarkBorderIcon />}
                        checkedIcon={<BookmarkIcon />}
                        onChange={handleChange}
                        name="New"
                      />
                    }
                    label="New"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={sell}
                        icon={<BookmarkBorderIcon />}
                        checkedIcon={<BookmarkIcon />}
                        onChange={handleChange}
                        name="sell"
                      />
                    }
                    label="sell"
                  />
                </FormGroup>
              </FormControl>
            </Box>
          </Box>
          {/* sản phẩm */}
          <Box sx={{ width: "100%" }}>
            <Grid container spacing={2}>
              {dataShow.map((item) => {
                return (
                  <Grid key={item.id} item xs={4} sx={{ marginBottom: "20px" }}>
                    <Stack>
                      <figure>
                        <div
                          style={{ padding: "0 30px ", marginBottom: "10px" }}>
                          <Link to={`/products/${filterItem}/${item._id}`}>
                            <div
                              style={{
                                borderRadius: "50% 50% 0 0",
                                backgroundColor: "#e5e5e5",
                                padding: "15px",
                                textAlign: "center",
                                position: "relative",
                              }}>
                              {/* new item */}
                              {item.newProduct && (
                                <div
                                  style={{
                                    position: "absolute",
                                    top: "0",
                                    right: "0",
                                  }}>
                                  <img
                                    style={{ maxWidth: "100%" }}
                                    src="https://sugartown.vn/img/lblnew.png"
                                    alt=""
                                  />
                                </div>
                              )}

                              {/* best seller */}
                              {item.bestSeller && (
                                <div
                                  style={{
                                    position: "absolute",
                                    top: "0",
                                    left: "0",
                                  }}>
                                  <img
                                    style={{ maxWidth: "100%" }}
                                    src="https://sugartown.vn/img/lblsale.png"
                                    alt=""
                                  />
                                </div>
                              )}
                              {/* image product */}
                              <img
                                style={{
                                  maxWidth: "100%",
                                  height: "100%",
                                  objectFit: "cover",
                                  position: "relative",
                                  top: "15px",
                                }}
                                src={item.imgURL1}
                                alt=""
                              />
                            </div>
                          </Link>
                        </div>
                      </figure>
                      <figcaption style={{ textAlign: "center" }}>
                        <Link>
                          <Typography
                            component="p"
                            variant="h6"
                            sx={{
                              color: "black",
                              "&:hover": { color: "#9d573c" },
                            }}>
                            {item.name}
                          </Typography>
                        </Link>
                        <p style={{ margin: "0", fontSize: "16px" }}>
                          {item.price.toLocaleString("it-IT", {
                            style: "currency",
                            currency: "VND",
                          })}
                        </p>
                      </figcaption>
                    </Stack>
                  </Grid>
                );
              })}
            </Grid>
            {/* Pages */}
            <Divider sx={{ marginTop: "20px" }} />
            <Stack flexDirection={"row"} sx={{ justifyContent: "center" }}>
              <Button
                variant="contained"
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}>
                Trang trước
              </Button>
              <Button
                variant="contained"
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === maxPage}>
                {" "}
                Trang kế tiếp
              </Button>
            </Stack>
            <Stack flexDirection={"row"} sx={{ justifyContent: "center" }}>
              {pages.map((page) => {
                return (
                  <Link key={page} to="">
                    <Button onClick={() => setCurrentPage(page)} variant="text">
                      {page}
                    </Button>
                  </Link>
                );
              })}
            </Stack>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default ProductList;
