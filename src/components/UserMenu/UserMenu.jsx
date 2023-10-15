import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/operations';
import { useAuth } from '../../hooks/useAuth';
import css from './UserMenu.module.css';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div className={css.main}>
      <p className="flex items-start gap-x-2 font-medium text-white/[.8] hover:text-white  sm:my-6 sm:px-6">
        {user.email}{' '}
      </p>
      <p
        onClick={() => dispatch(logOut())}
        className="cursor-pointer flex items-start gap-x-2 font-medium text-white/[.8] hover:text-white sm:border-l sm:border-white/[.3] sm:my-6 sm:px-6"
      >
        <svg
          class="w-4 h-4"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          height="800px"
          width="800px"
          version="1.1"
          id="Layer_1"
          viewBox="0 0 512 512"
        >
          <g>
            <g>
              <path d="M372.513,202.174H190.268l10.841-71.555c0.801-5.285-1.683-10.53-6.281-13.258c-4.598-2.725-10.39-2.395-14.646,0.841    L12.729,245.55c-3.264,2.484-5.18,6.349-5.18,10.45s1.917,7.966,5.18,10.45l167.453,127.348c2.337,1.776,5.137,2.678,7.949,2.678    c2.299,0,4.607-0.603,6.673-1.823c4.595-2.712,7.091-7.936,6.315-13.215L190.201,307.2h182.311    c7.249,0,12.472-5.879,12.472-13.128v-78.769C384.985,208.053,379.762,202.174,372.513,202.174z M358.728,280.944H175.002    c-3.815,0-7.441,1.661-9.935,4.548c-2.494,2.887-3.609,6.716-3.054,10.491l8.447,57.433L42.365,256l127.933-97.293l-8.276,54.629    c-0.574,3.782,0.53,7.626,3.026,10.526c2.493,2.901,6.128,4.569,9.954,4.569h183.727V280.944z" />
            </g>
          </g>
          <g>
            <g>
              <path d="M465.135,0H121.764c-7.249,0-13.785,5.879-13.785,13.128v52.513c0,7.249,6.535,13.128,13.785,13.128h303.918v354.462    H121.764c-7.249,0-13.785,5.879-13.785,13.128v52.513c0,7.249,6.535,13.128,13.785,13.128h343.371    c22.041,0,39.316-17.668,39.316-39.385V39.385C504.451,17.668,487.176,0,465.135,0z M478.195,472.615    c0,7.117-5.625,13.128-13.06,13.128H134.236v-26.256h305.231c7.249,0,12.472-5.879,12.472-13.128V65.641    c0-7.249-5.222-13.128-12.472-13.128H134.236V26.256h330.899c7.435,0,13.06,6.011,13.06,13.128V472.615z" />
            </g>
          </g>
        </svg>
        Logout
      </p>
    </div>
  );
};
