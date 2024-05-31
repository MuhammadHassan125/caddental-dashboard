import { AiOutlineDelete } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import { MdOutlineFileDownload } from "react-icons/md";
import '../index.css'
// eslint-disable-next-line react/prop-types
const UploadFiles = () => {
  return (
    <div className="main-grid">
      <div className="files-upload">
        <div>
          <h3> Uploaded Files List</h3>
        </div>
        <div>
          <button className="download-btn">Download All</button>
          <button className="see-btn">See all</button>
        </div>
      </div>

      <div className="laculus">
        <div className="file-name">
          <p>File Name</p>
        </div>
        <div>
          <p>Size</p>
        </div>
        <div>
          <p>Date</p>
        </div>
        <div id="actions">
          <p>Actions</p>
        </div>
        <div>
          <p>Automate</p>
        </div>
      </div>

      <div className="recent-grid-divs">
        <div>
          <h4>File1.txt</h4>
        </div>
        <div>
          <p>1.2 Mb</p>
        </div>
        <div>
          <p>January 01, 2024</p>
        </div>
        <div className="table-icons" id="actions">
          <button>
            <AiOutlineDelete className="table-btn-icons" />
          </button>
          <button>
            <FiEdit className="table-btn-icons" />
          </button>
          <button>
            <MdOutlineFileDownload className="table-btn-icons" />
          </button>
        </div>
        <div>
          <div className="see-btn">
            <img src="/axtract.png" />
          </div>
        </div>
      </div>

      <div className="recent-grid-divs">
        <div>
          <h4>File2.pdf</h4>
        </div>
        <div>
          <p>3.4 Mb</p>
        </div>
        <div>
          <p>February 15, 2024</p>
        </div>
        <div className="table-icons" id="actions">
          <button>
            <AiOutlineDelete className="table-btn-icons" />
          </button>
          <button>
            <FiEdit className="table-btn-icons" />
          </button>
          <button>
            <MdOutlineFileDownload className="table-btn-icons" />
          </button>
        </div>
        <div>
          <div className="see-btn">
            <img src="/axtract.png" />
          </div>
        </div>
      </div>

      <div className="recent-grid-divs">
        <div>
          <h4>File3.jpg</h4>
        </div>
        <div>
          <p>2.1 Mb</p>
        </div>
        <div>
          <p>March 22, 2024</p>
        </div>
        <div className="table-icons" id="actions">
          <button>
            <AiOutlineDelete className="table-btn-icons" />
          </button>
          <button>
            <FiEdit className="table-btn-icons" />
          </button>
          <button>
            <MdOutlineFileDownload className="table-btn-icons" />
          </button>
        </div>
        <div>
          <div className="see-btn">
            <img src="/axtract.png" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadFiles;