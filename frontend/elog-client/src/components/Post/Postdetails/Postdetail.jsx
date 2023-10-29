import React, { useEffect, useState } from "react";
import "./postdetail.css";
import { Button, Nav } from "react-bootstrap";
// import { fetchPostDetailsAction } from "../../../redux/slices/reports/postSlices";
// import { useDispatch, useSelector } from "react-redux";
import { baseURL } from "../../../utils/baseUrl";
import { Link, useParams } from "react-router-dom";
import UpdateReport from "../updateComp/UpdateReport";
// import   Test from "../updateComp/Test";
import axios from "axios";

export default function Postdetail() {
  const [report, setReport] = useState({});
  const { id } = useParams();

  const deleteFormData = async (data) => {
    const client = axios.create({
      baseURL: `${baseURL}`,
    });

    const response = await client.delete(`/api/posts/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
      data: JSON.stringify(data),
    });

    return response;
  };

  const handleSubmit = async (Data) => {
    const response = await deleteFormData(Data);

    if (response.status === 200) {
      // The API call was successful.
      console.log("Report has been deleted..");
    } else {
      // Handle the error.
      console.log("Report deleted unsuccessful!");
    }
  };

  useEffect(() => {
    const makeApiCall = () => {
      fetch(`${baseURL}/api/posts/${id}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setReport(data);
        });
    };
    makeApiCall();
    // axios
    //   .get(`${baseURL}/api/posts/${id}`)
    //   .then((response) => {
    //     setReport(response.data);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    // console.log(report);
    // console.log(report.title);
    // console.log(report.createdAt);
    // console.log(typeof report.user.username);
    report.user?.username
      ? console.log(report.user?.username)
      : console.log("null");
  }, []);

  return (
    <div className="showContainer">
      <h1 className="reportTitle">{report.title}</h1>
      <div className="show-sub">
        <div>
          <p className="postBy">
            {report.user?.username ? report.user.username : null}
          </p>
        </div>
        <div>
          <p className="post-at">{report.createdAt}</p>
        </div>
      </div>
      <div>
        <p className="show-Main">
          <p>{report.description}</p>
          {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta autem
          magni facilis esse quos saepe non pariatur maxime, similique
          distinctio illum eius nobis, nemo sapiente unde iusto nihil temporibus
          quam dicta consequuntur eos eum nulla perferendis? Eum eos recusandae
          consequuntur, excepturi alias, cupiditate atque magnam obcaecati quam
          neque optio nihil illo laborum ab quidem aliquid distinctio voluptate
          dolore, possimus placeat fugiat. Dolorem quae qui unde a quod!
          Voluptates quod dolores quia odit id. Fugit officia, qui velit earum
          impedit iste ratione illum aspernatur est tenetur laborum enim
          voluptas provident assumenda maiores? Consequuntur totam explicabo
          dicta, numquam neque qui debitis quibusdam dolore! A qui voluptatem
          corporis illo at sapiente vitae. Praesentium, autem, ea corrupti minus
          eius officia tenetur ratione sunt alias nemo quibusdam ab dolores
          optio veritatis quo eum! Aliquid facere reiciendis odit obcaecati
          cumque neque dolor quis! Labore hic enim iste ullam iure commodi!
          Corporis cupiditate ab inventore voluptatem, corrupti reprehenderit.
          Assumenda veritatis optio voluptatem pariatur, exercitationem dolorem
          necessitatibus consectetur illo doloribus, officiis rem maxime
          dignissimos, corrupti rerum mollitia. Eveniet impedit minus corrupti,
          possimus cum modi facilis, praesentium iusto ipsum esse provident,
          magnam voluptatum nulla accusantium quae nisi doloremque aut
          consectetur maiores temporibus ex sapiente ad adipisci rem? Eligendi,
          quod.
        </p>

        <p className="show-Main">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio ipsam
          fugiat soluta dolorem doloribus quisquam quas harum, modi molestias,
          perspiciatis illo, necessitatibus ex alias itaque. Magni ipsam
          temporibus deleniti alias delectus! Dolores mollitia, unde consectetur
          aspernatur quas placeat aliquid facilis incidunt recusandae id in, et
          suscipit laborum beatae laboriosam molestias sunt amet qui assumenda
          quo est voluptatibus dolorem corporis officia! Temporibus eius beatae
          corporis dolore sunt reprehenderit, doloribus delectus tempora illo
          quisquam numquam molestiae at, nam deserunt dolorem earum rerum non
          culpa quod. Soluta cupiditate, nisi beatae dolor ea architecto
          molestiae dolorum labore perspiciatis obcaecati nostrum suscipit fuga
          explicabo corrupti. Harum consequatur nulla animi modi maiores officia
          eaque veritatis? Qui numquam, repellat nihil unde assumenda officia
          aperiam vel accusamus repudiandae consectetur cumque laudantium,
          tenetur totam, odit dolorem perspiciatis ullam! Quos, odit. Nihil
          illo, ipsam saepe sint nesciunt, labore tempore vel doloremque
          asperiores vitae consectetur similique iusto molestias qui maiores
          minima sed fugiat quod quidem ut. Reiciendis perferendis sunt dolorem
          tempore doloremque repudiandae distinctio illo natus, quia mollitia
          eligendi fuga. Itaque natus facilis at laboriosam cum voluptatum
          obcaecati fugiat, commodi nesciunt fuga id adipisci. In placeat sint
          beatae consequuntur quibusdam totam, quis accusantium. Deserunt, atque
          quisquam fugit, laborum voluptas placeat eius eaque, autem culpa
          necessitatibus pariatur dolores minima rerum neque harum inventore
          assumenda. Reprehenderit neque quaerat praesentium cumque sapiente
          quisquam facilis veritatis dolorem delectus blanditiis atque impedit
          ducimus illo ad laborum dolores doloremque consectetur eum optio,
          natus cupiditate libero quod ipsa. Amet possimus officia eum sit
          libero tempora animi neque nam perspiciatis aperiam iusto, obcaecati
          eos veniam maxime quisquam mollitia magni quia consectetur incidunt
          nostrum exercitationem ducimus quo! Odit ducimus odio, ad nostrum
          corrupti nesciunt eos accusantium nobis minus assumenda impedit natus
          ea! Nulla reprehenderit dicta aspernatur sunt suscipit adipisci
          explicabo reiciendis libero fugiat, ex voluptatem, velit repellat, non
          praesentium repudiandae! */}
        </p>

        <div id="button">
          <div>
            <Nav.Link
              as={Link}
              to={`/updatepost/${id}`}
              element={<UpdateReport />}
            >
              {/* <Nav.Link href={`/updatepost/${id}`} element={<Test />}> */}
              <Button>Update</Button>
            </Nav.Link>
          </div>
          <div>
            <Button onclick={handleSubmit} variant="primary">
              Delete
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
