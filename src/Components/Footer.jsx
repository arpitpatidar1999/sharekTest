import React from "react";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Logo from "../assets/Footer/Group 4.svg";
import playStore from "../assets/Downloads/playStore.png"
import appleStore from "../assets/Downloads/appleStore.png"
import './Footer.css'

const Footer = () => {
  return (
    <Box>
      <Box
        sx={{ backgroundColor: "#1F1A1C", height: "204px",marginTop:"20px" ,padding: "64px 80px 48px 80px",display:"flex", }}
      >
        <Box marginLeft={"32px"}>
          <img src={Logo} alt="logo" />
        </Box>
        <Box marginLeft={"62px"} display={"flex"} flexDirection={"column"}>
      <Link className="link">
        Services
      </Link>
      <Link className="link">
        Terms and Conditions
      </Link>
      <Link className="link">
        Privacy
      </Link>
      <Link className="link">
        Contact Us
      </Link>
    </Box>
        <Box marginLeft={"62px"} display={"flex"} flexDirection={"column"}>
          <Link className="link">Twitter</Link>
          <Link className="link">LinkedIn</Link>
          <Link className="link">Facebook</Link>
          <Link className="link">GitHub</Link>
          <Link className="link">AngelList</Link>
          <Link className="link">Dribble</Link>
        </Box>
        <Box marginLeft={"62px"} width={"283px"} height={"40px"} display={"flex"} justifyContent={"space-between"}>
            <img src={appleStore} alt="" />
            <img src={playStore} alt="" />
        </Box>
      </Box>
      <Box>
        Footer
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ea quae at
        quia id cupiditate perspiciatis tempore modi iste dolore! Sapiente dolor
        animi porro cum atque, omnis nihil nostrum? Dicta. Magni, eaque
        blanditiis! Aperiam qui eius nostrum amet quam, id temporibus ullam
        explicabo fugiat eligendi delectus voluptatum repellat molestias
        commodi, quaerat vel eveniet quidem? Ea sint necessitatibus distinctio
        nihil ullam? Sunt, repellat obcaecati? Repudiandae expedita tempora cum
        minus aliquid veniam illum, incidunt earum voluptate explicabo? Illum
        sunt esse dignissimos quod, facere nisi laborum sequi iste, amet,
        molestias quos ullam. Debitis? Libero totam dolores eius illum
        architecto doloribus odio repellat ut est doloremque itaque natus minus
        suscipit assumenda deserunt modi voluptates, ipsum deleniti facilis.
        Facilis eos magni corrupti nulla architecto exercitationem? Nam
        doloremque laborum cum facere earum! Dolorem nesciunt perspiciatis natus
        soluta ratione aperiam in eum necessitatibus repellat, vero earum
        ducimus, ullam, accusamus cum a sed ipsam voluptatem? Ab, ratione culpa?
        Magni modi repellat quaerat itaque quae, ad perspiciatis, odit saepe
        quos pariatur, quidem esse delectus ipsam dolorum deleniti recusandae
        similique libero. Non necessitatibus quasi quisquam consectetur
        accusantium natus eos enim!
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet labore in vero sit eum fugit reprehenderit quidem velit, temporibus aut itaque eius corrupti facere autem, facilis dolorem eaque ad aspernatur.
        Ipsum, ullam provident. Qui corporis, ratione ab saepe voluptates nihil vero incidunt, odit dignissimos sit quaerat rerum porro perferendis veniam voluptate magnam ea maxime dolor tenetur nemo temporibus. Blanditiis, a?
        Error quis consequatur quos natus voluptate. Nihil aspernatur quod eius ullam quasi tempora! Ut ea iste quidem in alias, blanditiis debitis ad quod esse aliquid nulla eaque officia non quia.
        Consectetur rerum debitis qui culpa blanditiis, officia placeat ut veritatis maxime odit non dolor quidem, facilis corrupti sapiente ea omnis nesciunt aperiam provident. A sapiente doloremque quae dicta iste aliquam?
        Minima similique repellendus alias atque asperiores incidunt ut fugit, iusto aliquam impedit at? Saepe quibusdam, quisquam ratione eos labore voluptates officiis exercitationem sequi mollitia commodi magnam nisi, perspiciatis, id totam?
        Explicabo dolorum laudantium assumenda provident soluta repellendus sint eaque sit illo odio, neque, quidem ipsa beatae tempora blanditiis commodi voluptas rerum. Sit omnis totam quasi! Quam porro ipsa nemo rem?
        Repellat, dolorem minus inventore commodi unde numquam facere reiciendis magnam aspernatur cumque molestiae dolores quae aut provident vero iure veritatis! Eos maxime quasi, ipsam commodi perferendis numquam odio dicta alias!
        Doloremque pariatur veniam beatae ipsam quisquam. Minus ipsa suscipit repellat explicabo? Sapiente repellat quisquam consequuntur, sequi nesciunt vitae enim, in obcaecati architecto, voluptatibus iste corporis totam ratione nemo necessitatibus facilis!
        Aspernatur iste dolorem ullam tempora autem amet ut distinctio neque excepturi, natus corrupti accusamus? Possimus libero numquam enim deleniti nostrum? Quod consequuntur omnis qui blanditiis? Ut dolores perferendis quis facilis!
        Expedita praesentium est corporis numquam sint veniam beatae asperiores tempore odit, similique quasi! Laborum animi labore ullam minus velit, necessitatibus suscipit deserunt, sapiente possimus culpa omnis porro dolorem expedita eius.
      </Box>
    </Box>
  );
};

export default Footer;
