module.exports = ({ name, date, signature, logo }) => {
  const today = new Date();
  console.log(logo);
  return `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8" />
      <title>${`${name} - Consent Form`}</title>
      <style>
        #consentForm {
          flex-direction: row;
        }
        /* section {
          margin: 10;
          padding: 10;
          flex-grow: 1;
        } */
        h1 {
          font-size: 36px;
          font-weight: bold;
          padding-bottom: 16px;
          text-align: center;
        }
        h2 {
          font-size: 24px;
          font-weight: bold;
          padding-bottom: 8px;
          text-align: center;
        }
        h3 {
          font-size: 18px;
          font-weight: bold;
          padding-bottom: 18px;
        }
        p {
          font-size: 16px;
        }
        .user-details {
          font-size: 16px;
          padding-bottom: 8px;
        }
        img {
          width: 210;
          height: 49;
        }
      </style>
    </head>
    <body>
      <div id="consentForm">
      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJoAAAAyCAYAAACksMKUAAAACXBIWXMAABcSAAAXEgFnn9JSAAAF92lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNi4wLWMwMDIgNzkuMTY0NDYwLCAyMDIwLzA1LzEyLTE2OjA0OjE3ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjEuMiAoTWFjaW50b3NoKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjAtMDktMTRUMDk6NDk6MjYtMDQ6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDIwLTA5LTI4VDEyOjQ5OjI4LTA0OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIwLTA5LTI4VDEyOjQ5OjI4LTA0OjAwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgcGhvdG9zaG9wOklDQ1Byb2ZpbGU9InNSR0IgSUVDNjE5NjYtMi4xIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjcxYTk1NGU0LWViNjAtNGY2OS04ODc5LTQ2MGE1ZWM5MDliZCIgeG1wTU06RG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjU5NmRjODZhLWMxNWQtMDE0Zi05MDQ5LTk2ZmIzYTRhYzA1MSIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjgyYjE3YWIyLWE5ZDEtNGZjNi1hY2NmLWFlMTA0ZTZkYTA2NCI+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNyZWF0ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6ODJiMTdhYjItYTlkMS00ZmM2LWFjY2YtYWUxMDRlNmRhMDY0IiBzdEV2dDp3aGVuPSIyMDIwLTA5LTE0VDA5OjQ5OjI2LTA0OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjEuMiAoTWFjaW50b3NoKSIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6NzFhOTU0ZTQtZWI2MC00ZjY5LTg4NzktNDYwYTVlYzkwOWJkIiBzdEV2dDp3aGVuPSIyMDIwLTA5LTI4VDEyOjQ5OjI4LTA0OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjEuMiAoTWFjaW50b3NoKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4BudVKAAASO0lEQVR4nO2deZQcxX3HP9Xds3Ps7GolIQkdSAiBZC7jgAyKje0gFJ6NCXlgjAyOAzY2Z579EhzuICMMMQYHZBuC0bN8yMALJIDB2AlI2ASBOSIQCBASh1a3tBLaS3vMzkxX/vh179T0dM/MzkqP1Wq/7/Wb7eqq6jp+/avfVbVqw1JC4ebBjsHkWWDFgHx4PmAe8BXgm5E5EtC5DVrWQywemasEjiW/Ny8/g/d3TaAx0VN94REMKViRTxSgAbdiHTcAFwEXROaorp4RDGNEEpplQV8vdO4GnMjy1wKf8/6+C5gR+oaM1GPZg2nqCPZnRHM0QGtwNcLdSvEJ4Fbjvgm4JzSnAteNqmYEBwLKEppSHnHo0Md3haSdBnyrJNUtrMQjODBRltBsR5Y8txsoXvYupbBkBvF9YEL/XQz2tEFvt9Q3ggMTQUI7CZjj3/hcSBcT2RTgtjJ1jgd+aL7BVQSVAQv4AjC2XOM0onnaaoQb7u8wCc0BHgL+DJzjP3X7oK/beyqzvRBorFDv3wNzAXClvCq8SQG/An4PXF62cQoyecjmLSw1Qmr7M0xCuxmY6v39MHC3siCfh9YtQA6wOQn4epV1LyAGmd3QsUNscsARwLvA33l5/gX4eFQFo5OwauuhrNt1MOl4b9WdGsHQg09o04F/Djy7HM0rToymTDfkegCLGwZQ92ex+UpPF+RzYFmcC6yj2AQSA64pV0lHbx25vI01snju1/AJ7RKC4r5gNi4fqDpG5SdwNJozqja8ZoF6LnfHgZXnSq35j4ic5wHHBRNtCzoy8PKmI0jE+tAjxpEo3AA8iKxCpRr/EIEDxClj1VcOo3PdvJx/mw7mABsRd1Q5fTULjANyzM6+wfO6gU8qDTqaVs4DXjcTLAW9WdiTiY3IZ9GwgPnAMd59DFj80TUnGhaiZR4c9lC5kB0D8V5mpi5nNo+gmYWmnO+zD5gIpNFcSaJhKZ/S44m5ZQ0pfDaY0JSElZun88Hu8WHy2XTgL4CjgOOByWVrL2Amwj2P9sofVGW5oQoXyBj33R9VQyrBwtcOQ6AVaIUe9TYuo4EfolgMHIEmQSmx9QGHABaaS9G8g0pl0ek30bnRQrgR+EtgVlHDFGTyDtlw+eznwKvAW8BK4DmgvkJfzwPWAquAN73y51Qo81Eijmj3ae/ar2UHixD5CAANuUaIb4OG1SimAIcDi1AsAg5Dk0SITSFENhXoQ3MxsBaLY4A8quFNscWVWToJtkNrcKw8tuWGyWdBeXI6cHWZulOIVh3EUJ68BUC7d60EGj7a5gwOFmGOcEBpcJOQXoOmD4WFSACzgMUo7gQOAxIIw54KZNBcCmxCMQvoBZogvR4SG3BzDZSzvB4+gHZnQ9KuQ/yvYVhAeD+HckzJKO/XonoiG7IfjoU4w4uhIZ8EZze6cTWKRgqhPjHgSGAJih+jmYZmBkJklwFbURyBcDi8/F2o9NuQTwsBRyA1yL7YwC0h6bOA79RQ31jElTaQmBOLCm49ZImfhHyi5WDKWxnks60Es8x4KnheIjDGK1sLRiHycknfLEIGUmnINUByA9htKFIUOJHrlfgY8DMUDwHj0PwjwslMIgNZWhuhvhnltKPzAwh8rAGnA18LpN2CyDuV4ABnA/cD7wGbvGsD8J+Iey6Ig4FvAEuAV4D3gfXe70Ij3/HAnYhcuBnR3bcBK7zyJie6APgdcEbgPb/xrj8RLSYc5r1nvdf2rYhceithDKWAQ4E7gLe9dm3x+rAYUZrCMBYZr5uBpxBDvD9eW4GXgH/CIzoH6ArWoC1QOWh4G+FIQfjEdjRsfWAsHzw4yT05v9ouITIf9RDbDvVr0B0noOI75R0B5CI6VAliSi4Q0wKEMHqALwNfMvJ2eT2qC6lnPjKRQUz26vgS4lrzY5IPQwhnVEgZkEm4ERgNPI1wChNNwKe96zQkShnECvDFQN6E1xcfvYT7m//Ku0zMROIGzwJOBj4MPL8Y+FlIXYd51zcRQr0+8PwZor06o4ETves84CQLod4CNORTENuJTm1GpIOgJKORqW1EP7TpFH7wx/PtlbGZLsmQvH5+G5VqRqHQEUrB9ohGV8IfgduN+xnAZd7fZrzcZuSrjVq8TdLXyCcTzHsbhWVlPNFEBoWRSFC8lGQpHaX5yISAfCCVEPY5V8LHEJefiYsoJTKX0vZdRzFhxyjfdxOzgYUWour3Q2nI1UNqI5ouVChHs4AUeuk7f80b7TPUx6d+wL2rz7TebZ2sSYc0UwNpSG2B2C4h5JDpXlVlw4MYgwzWB0baRQjnMRWMO4AniF5G04i55KsIFxiPLHnPG3kmUlhCgzLTs8CVwFWI+eV/vfSU17aFwAmI3DeR0iDRs7zfxYjJ6b+MZ7sRjjoXIchbCcd7wIXApxDFKMj15lPo/3jgB4HntyAGqgnAFYjG6+Mqr14Qgci0361FuP0cr48/DtR7jgO86FUKiBnCzkB6LYo6SglCAw3opzfNZtnG2WpG41ZiVo5uJ87db57FjbN/rcckOxS9FEseCbB2oOrfRbfNAaeryNyxmSDBK29zSmWnwFiv/E1IVAiIIfcoI88uYBGyTEXhAUTWMgdwFTI2q4y0iRHl70GiX4LYgtgJ9wTSrwA+6V1QWFrXeNfpRt524HEqixfPURgDEG/LOEQOBJH1Dkc+qEspNlhfQzFh3oOM62+NtAuAFyhlJcsoiBQgIsXRwKne/UEWsBx/cH1t80N0fCeiH5kT7Ura2g8P0Q++O5dD0i0opcm4DuMTrWTyMfXvb56psdBGWBF+3TiQ2ObFuBUvn8sJTISroTdnVaOw+53+NTLQYbjJ+y3H7tuRcRiNyEgXI9xjHsXcK8okkoxI70X6ZiNf/NcRn+R8io3MQSIyw0TjVKeVh2myzYF7X0Qw7ZbbgJ+GlH0cISwfp4fkgXBj+Srjb+14L3kaT8vJJ6B+HVp1oYqUYxdIQFs2re9b8zeqKdalknaGnLZRQNZ1mFK/k/fbJ1m/fO/z+sIj/xs6Aq9OQKIFYp1oN46yCpLG781sjgWt3bBi/SzidkUdIY9MSg6RJYLE9iqFQSxXWQOylHyLcBWoEsqZNS5GFINyrrJ95dANtsv/aEy34xuEKIUe3qOwZI5DPtb2QJ4wdmCKKP0eyJ8YRXTqfRTKM9L6cIAYesmaL+jObEIdlGgjFwi9zbs20xp28Kctx7Fiy7FukbymgRQ4O1GJDZCv73dJvUpgyXE1JByAGG7l8c9TcIatoFS4vcqsukw9TyKBmD6R9SCy1RYGRwTXe23yicylYD7IRBUKQA+iDUEi8O/Nj64ctzQnOU+4sbzie31Segp4xo1DrA2SLd6r/a55RPJI82f067tmWNPqW8i6pRsANGArlwmJVvXAurlq855xuqgeLzY8taXfjwqlgiP1dbBuVxPbO1MknYocLTgJCxDhGWSClwfyBsuCyB6fMdLvQswPMxDTQ7WDG8RkREHwsRLR/nyH3qtlypoTlaV6oqwE37Sz2Ug7EbGlhcE0YTRTo+Pe6p8ml6vdONgdKLvTUARcIAVrW6fyZPMca2q6hXyIEcxHXluMqusCrdTSdaepIpOwBmLgtHn1Kp5C86v+NmjxcTYlYEv7RDa2jSEZq6jJB7nUDgpL5U2BZ1GEdoKRlgPuo2BCyFFun355TEVkPh8/RQybPsoRjznIhyLCtY8JVPYsRMGfDVPEiBMegHo1cKxx/9uQPFXB6neaWPyfG+O7ie3IouE3Jwa5nM39755K2ukhblcOQsy6DpPrd7GubQqPb/i0iMn+lMYhsRNV18ouN8HlxvvBkk3GnVlY3zqKdF0GtwxRewgjgl8gm1+2BdKDROl3xPy6HURQ91FHbTIblJpALqJ4v0W5JWtX4H4JMvG3Aaspr0FXg3sp1vQvAR5DzChnIlqkaf7IUIh1qzgpQTi5tPyhLdB1/Ci5hR5sxqHpRAtne7b5eDa1Hcysxk3kcnaVzj+LSXW7WbHxOE4Z8zoN8T3CI+Joq53x8R38of0E3ncCCkM8Bh/mLF7dOpW4FblsmpQeJrs0U6ptQTShPYIsuf7EL0CIohnhJrVuFHwNUf3nefcnIy6aNQjBHWnkDU7e84H7T1AcNBAUyGHgTvXLEIO337+/9a4wXIG4tmp5l3ISHgPWDigH4jnuQUOvclBo4uRpcdPU1feSqbNk53p1dePQR2cmzsbsWI5O7aHHihHTeZy8OBH6kmAHVsaDGuDRl6ezbXcTYxqCpqd+mFxhIE7voAnC14x8Q+dvKMgwU7wrCH+Ag9woiut9DfgDBSJpQuxqQQQNycsR+fXbEfX6I2eWCzOxBHesmXlWIPLZYxQ2JgWxBzHGPmqk1VFs0ghz6ZnzknTau4SYtQ12zCWpFM/Gj+Th1FHktE0dObLTHfKHttBag+KjaeVWaw6WOpGO+gTT3VYu63qZcbkW2jodHEOpduw83b2wfPUxOLaLpXSUv+pOhBvkEQ5RLd5CuFUvYs4wucbDyFbDs726JyPEkwFaEYfxbsQUBEKc13ttSCNO5DBsR9wwZyN2tGnIJOWATmTZbkMM50F8B/E4nINY7PsQLrsMMUmAKC5TvLauDKnjMa8PbQjnag48fw3ZnXYucAri37QR7vUK8vG1Bcr0IhvFxyGyYljfH/XKdQEd6vzzz+1/YqHJ5S2aGU2avi/HyNe72tpeZ2Udx8qhK8tLJVBKk8nHyGu7z1H5I1pV8oWEzr02VbXRZ9tFC58CXK3oycawraEcKjaCgcJp6y6sAFoDdTDJ6sDSTNe+S8LFMLkNFIokOSAHmvbJumN2RtlszzZi9ejQlT4Ry6KiudkI9kM4yboQ84EGLccafB5hp3sLV7qo92LaJWZnykpX+wmRDeTsmgP6nJtKbOravfiu5UhUw3DBVETeidLSTExBvAGR2xqHOyoR2kuEWO5rxEB2uVeCRXXqdbX5akEDpQbZcnknUhr8eMCgGsHre0ho7mCwiHCtqlYsQwyO5WAjGtXeJHATvsxRzXJYS6DisEI1hNZKhfMxKqCZ0sjOweJYKu+aspGNKdVuLt4buBAxk9TqSRi2qFaVXIrEiNeChYi9aG9iD5Wdu5rSSNB9jZlIFGyUbeaA5WwDca1cx8CXv2cQv+NQwyzgH5CNxy8hy/DOQJ4k4vc7zfv7ccR4GVwqfeKZh0Q6pJBwcAvxV/6OAuE1IW6oC5G4rreQgE0zDH1YYiCE9hJwN0bYdxVYMLDmVI3SMyRL4cepBZWBf0VEgU6gBYmmXYg4kp/w8oxCwqCnefkcxDp/IUJ4piPf9238nIIbZxFCVC8ihJZDQhW+jxBqp9euc5AxupghejjL3sJArbALkDCcanAv4kvbFxiI7crEtQiRfRvxAR6OyHLPIBzLJ5R6RNue4eVLIUGRcxFuZcLXOqcBP0LiimcgcpofM1+HcMUlyJiP8uodizjY7yN6L8KwwEAJ7UOqs61to3Qf4N5EM8KBtiJcKXjt8NqQ9u5BOMxNiGLyE6MuF/FD9lI4iXIr8G8UL2mLkYgJP0AyjNh7EG7XiXCxoBwZFD12I5tEoBAuPSxRS/jLL5AlpOSoKQPfoxDlui/QiBDQnYTbsbJIVMPVFKIVvohwGQcxnI6lENrZ7eU/PqSuUV65Ji9POYHe9uq3CY/KTYektXq/w/rM8lo7dw3Fu2NMPIcsBfsSY7z3314h3zcohMn4h7x81UszA8xzCLdaZZSdj4SCxxFOpZBIhWBA4mARFsM/7FArof0ZmYRLQp7tKwNpEJXaHkNkLV9w9znMXCTkpxy+ixDxk8jG480IZ3uJ8mdY1IL9wqk7WAyGXd+IqP/mJtTFFHZoDxX4E/ms93si5QlNIfLl/RRkNhDC3UN4kJ+ZJ0vtm1mGLWqN/QGRkUyL/3bE1jZU8QKy6+gBwjcST0Z8klEarX8mRTkO1IvIhLUcweUvnfMQ+Xc6Yu+bVENdQw6DITQQE4YfXXkTe19+iUIjlY8SVYhQbu4WOhshljbEVPM5ZOP0L5Hl0T90+A5Elvsf5EyMkxCZbTQF+53P2UzCW4YQ2u1IpOq9yA6rVqLh1+O38yxEtrwGMeaeGlZof8Pe0HQWIedghR19tK/wIpWt6XnEqW7m24BsVVuCaMZd0L+x8FpE9gQ57KQZ6duDiLnCRkJ9lnl5OpH/m2B+XM8iBuFrEc08hwSPtnvtaKEUHQiR+8dJPeG16XiEM75ToZ/7Bf4fSXz/CAB5K/sAAAAASUVORK5CYII=" width="154" height="50" alt="Marathon Health Logo"/>
      <h1>Consent Form</h1>
        <div>
          <div>
            <h2>What is Lorem Ipsum?</h2>
            <p>
              <strong>Lorem Ipsum</strong> is simply dummy text of the printing
              and typesetting industry. Lorem Ipsum has been the industry's
              standard dummy text ever since the 1500s, when an unknown printer
              took a galley of type and scrambled it to make a type specimen book.
              It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of Lorem
              Ipsum.
            </p>
          </div>
          <div>
            <h2>Why do we use it?</h2>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The point
              of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here, content
              here', making it look like readable English. Many desktop publishing
              packages and web page editors now use Lorem Ipsum as their default
              model text, and a search for 'lorem ipsum' will uncover many web
              sites still in their infancy. Various versions have evolved over the
              years, sometimes by accident, sometimes on purpose (injected humour
              and the like).
            </p>
          </div>
          <br />
          <div>
            <h2>Where does it come from?</h2>
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin professor
              at Hampden-Sydney College in Virginia, looked up one of the more
              obscure Latin words, consectetur, from a Lorem Ipsum passage, and
              going through the cites of the word in classical literature,
              discovered the undoubtable source. Lorem Ipsum comes from sections
              1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
              of Good and Evil) by Cicero, written in 45 BC. This book is a
              treatise on the theory of ethics, very popular during the
              Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
              amet..", comes from a line in section 1.10.32.
            </p>
            <p>
              The standard chunk of Lorem Ipsum used since the 1500s is reproduced
              below for those interested. Sections 1.10.32 and 1.10.33 from "de
              Finibus Bonorum et Malorum" by Cicero are also reproduced in their
              exact original form, accompanied by English versions from the 1914
              translation by H. Rackham.
            </p>
          </div>
          <br />
          <div>
            <h2>Where can I get some?</h2>
            <p>
              There are many variations of passages of Lorem Ipsum available, but
              the majority have suffered alteration in some form, by injected
              humour, or randomised words which don't look even slightly
              believable. If you are going to use a passage of Lorem Ipsum, you
              need to be sure there isn't anything embarrassing hidden in the
              middle of text. All the Lorem Ipsum generators on the Internet tend
              to repeat predefined chunks as necessary, making this the first true
              generator on the Internet. It uses a dictionary of over 200 Latin
              words, combined with a handful of model sentence structures, to
              generate Lorem Ipsum which looks reasonable. The generated Lorem
              Ipsum is therefore always free from repetition, injected humour, or
              non-characteristic words etc.
            </p>
          </div>
          <br />
        </div>
        <div>
          <div class="user-details">
            <p>Name: <strong>${name}</strong></p>
            <p>Date: <strong>${date}</strong></p>
            <p>Signature: <img src="${signature}" width="180" height="42" /></p>
          </div>
        </div>
      </div>
    </body>
  </html>
   `;
};
