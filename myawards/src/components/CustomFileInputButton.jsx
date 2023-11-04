import React from "react";
import "../css/Posting.css";

class CustomFileInputButton extends React.Component {
  constructor(props) {
    super(props);
    this.fileInputRef = React.createRef();
    this.state = {
      selectedImages: [], // 이미지 배열
    };
  }

  handleImageClick = () => {
    this.fileInputRef.current.click();
  };

  handleFileChange = (e) => {
    const files = e.target.files;
    if (files.length > 0) {
      const newImages = Array.from(files).map((file) =>
        URL.createObjectURL(file)
      );
      this.setState((prevState) => ({
        selectedImages: [...prevState.selectedImages, ...newImages].slice(0, 2), // 최대 두 장까지
      }));
    }
  };

  render() {
    return (
      <div>
        <label
          htmlFor="input_photo"
          id="filelabel"
          onClick={this.handleImageClick}
        >
          사진 첨부
        </label>
        <input
          id="input_photo"
          type="file"
          style={{ display: "none" }}
          ref={this.fileInputRef}
          onChange={this.handleFileChange}
          multiple // 여러 파일 선택을 가능하게 함
        />
        <img
          src={process.env.PUBLIC_URL + "/images/inputfile.png"}
          alt="사진첨부 버튼"
          id="inputfileimg"
          style={{ cursor: "pointer" }}
          onClick={this.handleImageClick}
        />
        {this.state.selectedImages.length > 0 && (
          <div id="selected_container">
            {this.state.selectedImages.map((image, index) => (
              <div id="selected_div" key={index}>
                <img
                  id="selected_img"
                  src={image}
                  alt={`선택된 이미지 ${index + 1}`}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default CustomFileInputButton;
