import React from 'react'

//styles
import styles from './styles/uploadImage.module.scss'

//assets
import UploadSvg from '../../svg/Upload'

class UploadImage extends React.Component {
    state = {
        loading: false,
        thumb: undefined,
    };

    componentWillReceiveProps(nextProps) {
        if (!nextProps.file) { return; }

        this.setState({ loading: true }, () => {
            let reader = new FileReader();

            reader.onloadend = () => {
                this.setState({ loading: false, thumb: reader.result });
            };

            reader.readAsDataURL(nextProps.file);
        });
    }

    render() {
        const { file } = this.props;
        const { loading, thumb } = this.state;

      

        if (loading) { return <p>loading...</p>; }

        return (
            <>

                <label htmlFor={this.props.id} className={styles.uploadArea}>

                    <UploadSvg heigth="40" width="40" />
                    {
                        thumb ? <img src={thumb}
                            alt={file.name}
                            className={styles.thumbImage}
                             />
                            :
                            <div className="mt-3">drag and drops your files or  browse</div>
                    }


                </label>
                <input
                    name={this.props.name}
                    type={this.props.type}
                    id={this.props.id}
                    style={{ display: "none" }}
                    onChange={this.props.handleChange} />
            </>


        );
    }
}


export default UploadImage