import React from 'react'

export function UserProfileView({
    onShowInpuFile,
    finalAvatar,
    onChangeData,
    userInfor,
    handleChangeFile,
    currentUser,
    handlSubmit
}){
    return(
        <main>
        <div className="ass1-login">
          <div className="ass1-login__content">
            <p>Profile</p>
            <div className="ass1-login__form">
              <div style={{cursor:"pointer"}} className="avatar" onClick={onShowInpuFile}>
                <img src={finalAvatar} alt="" />
              </div>
              <form action="#">
                <input
                  onChange={onChangeData('fullname')}
                  value={userInfor?.fullname||""}
                  type="text" className="form-control"
                  placeholder={currentUser?.fullname}
                />
                <select
                  onChange={onChangeData('gender')}
                  value={userInfor?.gender||""}
                  className="form-control"
                >
                  <option value disabled>Giới tính</option>
                  <option value="nam">Nam</option>
                  <option value="nu">Nữ</option>
                </select>
                <input
                  id="fileAvatar"
                  onChange={handleChangeFile}
                  type="file" name="avatar"
                  placeholder="Ảnh đại diện"
                  className="form-control"
                />
                <textarea
                  onChange={onChangeData('description')}
                  value={userInfor?.description||""}
                  className="form-control"
                  cols={30} rows={5}
                  placeholder="Mô tả ngắn ..."
                />
                <div className="ass1-login__send justify-content-center">
                  <button onClick={handlSubmit} type="submit" className="ass1-btn">Cập nhật</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    )
}