import React from 'react';

const CheckBoxBlock = () => (
    <div>
        <div className="form-check mt-2" >
            <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
            <label className="form-check-label" >
            Все
            </label>
        </div>
        <div className="form-check  mt-2">
            <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
            <label className="form-check-label" >
            Без пересадок
            </label>
        </div>
        <div className="form-check  mt-2">
            <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
            <label className="form-check-label" >
            1 пересасдка
            </label>
        </div>
        <div className="form-check  mt-2">
            <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
            <label className="form-check-label" >
            2 пересасдка
            </label>
        </div>
        <div className="form-check  mt-2">
            <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
            <label className="form-check-label" >
            3 пересасдка
            </label>
        </div>
    </div>
);

export default CheckBoxBlock;

