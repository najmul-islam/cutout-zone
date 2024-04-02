import Link from "next/link";
import BottomBar from "./BottomBar";

const Footer = () => {
  return (
    <>
      <div className="container bg-[#1A1C20] text-[#fff] pt-[30px]">
        <div className="grid grid-cols-4">
          <div>
            <h6 className="font-medium mb-2">About us</h6>
            <p className="text-[#8b8d94] pr-2">
              CutOut Zone is a place where your images will have a brand new
              look. Our professional designers are always creative and have
              superficial knowledge to bring outstanding look in your portraits.
              What are you waiting for?
            </p>

            <h6 className="font-medium my-2">Social link</h6>
            <Stack direction="row" spacing={1}>
              <Box
                component={Link}
                href="https://www.facebook.com/thecutoutzone/"
                target="_blank"
                sx={{
                  background: "#3C93A8",
                  borderRadius: "50px",
                  "&:hover": {
                    background: "#4493A7",
                  },
                }}
              >
                <IconButton size="small">
                  <Facebook sx={{ color: "#fff" }} />
                </IconButton>
              </Box>

              <Box
                component={Link}
                href="https://www.instagram.com/the_CutOut_Zone"
                target="_blank"
                sx={{
                  background: "#3C93A8",
                  borderRadius: "50px",
                  "&:hover": {
                    background: "#4493A7",
                  },
                }}
              >
                <IconButton size="small">
                  <Instagram sx={{ color: "#fff" }} />
                </IconButton>
              </Box>

              <Box
                component={Link}
                href="https://www.linkedin.com/company/the-cutout-zone/"
                target="_blank"
                sx={{
                  background: "#3C93A8",
                  borderRadius: "50px",
                  "&:hover": {
                    background: "#4493A7",
                  },
                }}
              >
                <IconButton size="small">
                  <LinkedIn sx={{ color: "#fff" }} />
                </IconButton>
              </Box>

              <Box
                component={Link}
                href="https://twitter.com/theCutOutZone"
                target="_blank"
                sx={{
                  background: "#3C93A8",
                  borderRadius: "50px",
                  "&:hover": {
                    background: "#4493A7",
                  },
                }}
              >
                <IconButton size="small">
                  <Twitter sx={{ color: "#fff" }} />
                </IconButton>
              </Box>
            </Stack>
          </div>

          <div>
            <Typography variant="h6" fontWeight="bold" marginBottom={2}>
              Services
            </Typography>
            <List disablePadding>
              {[
                {
                  id: 1,
                  link: "/service/clipping-path",
                  text: "Clipping path service",
                },
                {
                  id: 2,
                  link: "/service/shadow-creation",
                  text: "Shadow Creation",
                },
                {
                  id: 3,
                  link: "/service/image-masking",
                  text: "Image Masking Services",
                },
                {
                  id: 4,
                  link: "/service/ghost-mannequin",
                  text: "Ghost mannequin services",
                },
                {
                  id: 6,
                  link: "/service/jewelry-retouching",
                  text: "Jewelry Retouching Service",
                },
                {
                  id: 7,
                  link: "/service/color-correction",
                  text: "Color Correction Service",
                },
              ].map((item) => (
                <ListItem
                  component={Link}
                  key={item.id}
                  href={item.link}
                  disableGutters
                  disablePadding
                  sx={{
                    color: "#8b8d94",
                    marginBottom: "5px",
                    transition: "all 0.3s ease",
                    fontSize: "14px",
                    "&:hover": {
                      color: "#4493A7",
                      textDecoration: "underline",
                    },
                  }}
                >
                  <Tag sx={{ fontSize: "18px", marginRight: "5px" }} />{" "}
                  {item.text}
                </ListItem>
              ))}
            </List>
          </div>
          <div>
            <Typography variant="h5" fontWeight="bold" marginBottom={2}>
              Contact
            </Typography>
            <Stack direction="column" spacing={1}>
              <Typography
                component={Link}
                href="mailto:info@cutoutzone.com"
                sx={{
                  color: "#8b8d94",
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    color: "#4493A7",
                    textDecoration: "underline",
                  },
                }}
              >
                <MailOutline sx={{ fontSize: "18px", marginRight: "5px" }} />{" "}
                info@cutoutzone.com
              </Typography>
              <Typography
                component={Link}
                href="mailto:infocutoutzone@gmail.com"
                sx={{
                  color: "#8b8d94",
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    color: "#4493A7",
                    textDecoration: "underline",
                  },
                }}
              >
                <MailOutline sx={{ fontSize: "18px", marginRight: "5px" }} />{" "}
                infocutoutzone@gmail.com
              </Typography>
              <Typography
                component={Link}
                href="skype:live:CutOutZone?chat"
                sx={{
                  color: "#8b8d94",
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    color: "#4493A7",
                    textDecoration: "underline",
                  },
                }}
              >
                <VideoCameraBackOutlined
                  sx={{ fontSize: "18px", marginRight: "5px" }}
                />
                live:cutoutzone
              </Typography>
            </Stack>
          </div>
          <div>
            <Typography variant="h5" fontWeight="bold" marginBottom={2}>
              Address
            </Typography>
            <Typography
              variant="subtitle1"
              fontWeight="bold"
              color="#fff"
              sx={{ display: "flex", alignItems: "center" }}
            >
              <LocationOnOutlined
                sx={{ fontSize: "20px", marginRight: "5px" }}
              />
              Singapore office
            </Typography>
            <Typography variant="body2" color="#8b8d94" paddingLeft={3}>
              Jalan Papan, 5A Jurong West – 619406 Singapore
            </Typography>

            <Typography
              variant="subtitle1"
              fontWeight="bold"
              color="#fff"
              sx={{
                display: "flex",
                alignItems: "center",
                marginTop: "10px",
              }}
            >
              <LocationOnOutlined
                sx={{ fontSize: "20px", marginRight: "5px" }}
              />
              Bangladesh office
            </Typography>
            <Typography variant="body2" color="#8b8d94" paddingLeft={3}>
              House # 6/1, Dhanmondi Dhaka – 1205 Bangladesh
            </Typography>
          </div>
        </div>
        <BottomBar />
      </div>
    </>
  );
};
export default Footer;
