export default function Objet() {
  return (
    <div className="container">
      <div className="circles">
        <div className="big-trajectory" />
        <div className="medium-circle">
          <div className="medium-circle-inner">
            <div className="medium-trajectory" />
          </div>
        </div>
      </div>
      <div className="img-box"></div>
      <style jsx>{`
        .container {
          height: 100%;
          position: relative;
          transform: scale(1.5);
          opacity: 0.2;
          position: absolute;
          bottom: -50%;
        }
        .img-box {
          position: absolute;
          top: 50%;
          left: 80%;
          transform: translate(25%, -50%);
        }
        .circles {
          height: 100%;
          position: relative;
          display: flex;
          align-items: center;
        }
        .big-circle {
          width: 30vh;
          height: 30vh;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          border-radius: 100%;
          background-color: #ffc600;
          box-shadow: inset 0px 4px 60px rgba(0, 0, 0, 0.5);
        }
        .big-trajectory {
          width: 80vh;
          height: 80vh;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background: none;
          border: 1px dashed white;
          border-radius: 100%;
        }
        .medium-circle {
          width: 10vh;
          height: 10vh;
          border-radius: 100%;
          background-color: #a7d129;
          margin-left: -2vw;
          position: absolute;
          top: 15vh;
          transform: translate(-40%, -50%);
          animation: spin2 4s linear infinite;
          box-shadow: inset 0px 4px 60px rgba(0, 0, 0, 0.5);
        }
        .medium-circle-inner {
          width: 100%;
          height: 100%;
          position: relative;
        }
        .medium-trajectory {
          position: absolute;
          width: 15vh;
          height: 15vh;
          background: none;
          border: 1px dashed #ffffffaf;
          border-radius: 100%;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }

        @keyframes spin2 {
          from {
            transform: translate(50%, 35vh) rotate(0turn) translate(-50%, 35vh)
              translate(50%, 50%) rotate(1turn) translate(-50%, -50%);
          }
          to {
            transform: translate(50%, 35vh) rotate(1turn) translate(-50%, 35vh)
              translate(50%, 50%) rotate(0turn) translate(-50%, -50%);
          }
        }
      `}</style>
    </div>
  );
}
